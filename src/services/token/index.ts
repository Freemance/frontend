import Cookies from 'universal-cookie';
import { NextPageContext } from 'next';

export const verifyTokenSsr = async (context: NextPageContext) => {
  const ssr = context.req ? true : false;

  const cookies = new Cookies(ssr ? context.req.headers.cookie : null);
  const accessToken = cookies.get('access-token');

  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  return {
    props: {},
  };
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
  cookies.remove(key, { path: '/' });
  return;
};
