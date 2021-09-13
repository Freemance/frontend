import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  fromPromise,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { saveToken, getToken, deleteToken } from 'src/services/token';
import { IRefreshInput, IRefreshResponse, REFRESH_TOKEN } from './auth';

const httpLink = new HttpLink({
  uri: 'https://freemance-backend.herokuapp.com/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  const authToken = getToken('access-token');

  if (authToken) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
  }
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ extensions }) => {
      if (extensions.code === 'UNAUTHENTICATED') {
        const refreshToken = getToken('refresh-token');
        if (!refreshToken) return;

        return fromPromise(
          useApolloClient()
            .mutate<IRefreshResponse, IRefreshInput>({
              mutation: REFRESH_TOKEN,
              variables: { token: refreshToken },
            })
            .then((res) => {
              saveToken('access-token', res.data.refreshToken.accessToken);
              saveToken('refresh-token', res.data.refreshToken.refreshToken);
              return res.data.refreshToken.accessToken;
            })
            .catch((err) => {
              console.log(err);
              deleteToken('access-token');
              deleteToken('refresh-token');
              return;
            })
        )
          .filter((value) => Boolean(value))
          .flatMap(() => {
            return forward(operation);
          });
      }
    });
  }
});

const cache = new InMemoryCache({});

export const useApolloClient = () => {
  return new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache,
  });
};
