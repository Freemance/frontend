import { InMemoryCache, ApolloClient } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://freemance-backend2.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
