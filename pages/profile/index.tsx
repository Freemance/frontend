import * as React from 'react';
import Head from 'next/head';

import ProfileLayout from '@layouts/ProfileLayout';
import ProfileHeader from '@components/organisms/ProfileHeader';
import ProfileBody from '@components/organisms/ProfileBody';

export default function Profile() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileLayout>
        <ProfileHeader />
        <ProfileBody />
      </ProfileLayout>
    </React.Fragment>
  );
}
