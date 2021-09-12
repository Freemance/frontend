import Cookies from 'universal-cookie';
import { GetServerSidePropsContext } from 'next';

import { useApolloClient } from 'src/lib/apollo/client';
import {
  IRefreshInput,
  IRefreshResponse,
  REFRESH_TOKEN,
} from 'src/lib/apollo/auth';

export const verifyTokenSsr = async (
  context: GetServerSidePropsContext
): Promise<boolean> => {
  const ssr = context.req ? true : false;

  const cookies = new Cookies(ssr ? context.req.headers.cookie : null);
  const accessToken = cookies.get('access-token');
  const refreshToken = cookies.get('refresh-token');

  if (!accessToken || !refreshToken) {
    return false;
  }

  try {
    const res = await useApolloClient().mutate<IRefreshResponse, IRefreshInput>(
      {
        mutation: REFRESH_TOKEN,
        variables: { token: refreshToken },
      }
    );
    if (res.data) {
      cookies.set('access-token', res.data.refreshToken.accessToken, {
        path: '/',
      });
      cookies.set('refresh-token', res.data.refreshToken.refreshToken, {
        path: '/',
      });
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    cookies.remove('access-token');
    cookies.remove('refresh-token');
    return false;
  }

  return true;
};

export const saveToken = (key: string, token: string) => {
  const cookies = new Cookies();
  cookies.set(key, token, { path: '/' });
  return Promise.resolve();
};

export const getToken = (key: string) => {
  const cookies = new Cookies();
  return cookies.get(key);
};

export const deleteToken = (key: string) => {
  const cookies = new Cookies();
  cookies.remove(key);
  return;
};
