import * as React from 'react';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import UserLayout from '@layouts/UserLayout/index';
import FormCard from '@components/organisms/FormCard';
import SignUpForm from '@components/molecules/SignUpForm';
import { verifyTokenSsr } from 'src/services/token';

export default function SignUp() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Register</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout>
        <FormCard
          title="Get early access"
          subtitle="Create your Freemance profile"
        >
          <SignUpForm />
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
