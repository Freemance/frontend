import * as React from 'react';
import Head from 'next/head';
import AppLayout from '@layouts/AppLayout';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout />
    </React.Fragment>
  );
}
