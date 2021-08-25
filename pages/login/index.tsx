import * as React from 'react';
import Head from 'next/head';
import UserLayout from '@layouts/UserLayout/index';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout />
    </React.Fragment>
  );
}
