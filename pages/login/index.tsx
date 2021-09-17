import * as React from 'react';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import UserLayout from '@layouts/UserLayout/index';
import FormCard from '@components/organisms/FormCard';
import LoginForm from '@components/molecules/LoginForm';
import { verifyTokenSsr } from 'src/services/token';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Login</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout>
        <FormCard title="Sign in" subtitle="Continue to your Freemance profile">
          <LoginForm />
        </FormCard>
      </UserLayout>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const verifyToken = await verifyTokenSsr(context);

  if (verifyToken) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile',
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
