import * as React from 'react';
import Head from 'next/head';

import UserLayout from '@layouts/UserLayout/index';
import FormCard from '@components/organisms/FormCard';
import LoginForm from '@components/molecules/LoginForm';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Login</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout>
        <FormCard title="Sign in" subtitle="Continue to your Freemance profile">
          <LoginForm />
        </FormCard>
      </UserLayout>
    </React.Fragment>
  );
}
