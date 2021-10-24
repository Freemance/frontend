import * as React from 'react';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import UserLayout from '@layouts/UserLayout/index';
import FormCard from '@components/organisms/FormCard';
import LoginForm from '@components/molecules/LoginForm';
import { verifyTokenSsr } from 'src/services/token';
import { NextSeo } from 'next-seo';
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Login</title>
        <meta
          name="description"
          content="Login now and become a true freelancer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: 'Freemance - Login',
          description:
            'Access freemance now, edit your profile to attract the attention of contractors',
          url: 'Access freemance now',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}images/cover.png`,
              width: 1200,
              height: 1200,
            },
          ],
        }}
      />
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
