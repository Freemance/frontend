import * as React from 'react';
import Head from 'next/head';

import UserLayout from '@layouts/UserLayout/index';
import FormCard from '@components/organisms/FormCard';
import SignUpForm from '@components/molecules/SignUpForm';

export default function SignUp() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Register</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout>
        <FormCard
          title="Get early access"
          subtitle="Create your Freemance profile"
        >
          <SignUpForm />
        </FormCard>
      </UserLayout>
    </React.Fragment>
  );
}
