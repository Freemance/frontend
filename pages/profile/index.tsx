import * as React from 'react';
import Head from 'next/head';

import ProfileLayout from '@layouts/ProfileLayout';

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
