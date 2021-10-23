import * as React from 'react';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import UserLayout from '@layouts/UserLayout/index';
import FormCard from '@components/organisms/FormCard';
import SignUpForm from '@components/molecules/SignUpForm';
import { verifyTokenSsr } from 'src/services/token';
import { NextSeo } from 'next-seo';
export default function SignUp() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Register</title>
        <meta
          name="description"
          content="Register now in freemance and become the most wanted freelancer in your field"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: 'Freemance - Register',
          description:
            'Register now in freemance and become the most wanted freelancer in your field',
          url: 'Register now in Freemance',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/cover.png`,
              width: 1200,
              height: 1200,
            },
          ],
        }}
      />
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
