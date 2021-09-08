import * as React from 'react';
import Head from 'next/head';

import ProfileLayout from '@layouts/ProfileLayout';
import { NextPageContext } from 'next';
import { authenticateTokenSsr } from 'src/services/token';

export default function Profile() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileLayout />
    </React.Fragment>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const props = await authenticateTokenSsr(context);
  return props;
};
