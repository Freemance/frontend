import React from 'react';
import Head from 'next/head';
import { Directory } from '@components/organisms/Directory/Directory';

export default function Index() {
  return (
    <>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Directory />
    </>
  );
}
