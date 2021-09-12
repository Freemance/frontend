import * as React from 'react';
import Head from 'next/head';

import ProfileLayout from '@layouts/ProfileLayout';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { verifyTokenSsr } from 'src/services/token';

interface IProfile {
  fromLogin?: boolean;
}

export default function Profile({ fromLogin }: IProfile) {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Profile</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileLayout fromLogin={fromLogin} />
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const verifyToken = await verifyTokenSsr(context);

  if (verifyToken) {
    return {
      props: {
        fromLogin: context.query.fromLogin || false,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
};
