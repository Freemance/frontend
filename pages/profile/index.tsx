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
        <title>Freemance - Hire and Contact Profesionals</title>
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
  const props = await verifyTokenSsr(context);
  return props;
};
