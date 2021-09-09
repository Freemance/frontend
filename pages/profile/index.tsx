import * as React from 'react';
import Head from 'next/head';

import ProfileLayout from '@layouts/ProfileLayout';
import { NextPageContext } from 'next';
import { verifyTokenSsr } from 'src/services/token';

export default function Profile() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Profile</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileLayout />
    </React.Fragment>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const props = await verifyTokenSsr(context);
  return props;
};
