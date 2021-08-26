import * as React from 'react';
import Head from 'next/head';

import UserLayout from '@layouts/UserLayout/index';
import FormCard from '@components/organisms/FormCard';
import ConfirmSignUpForm from '@components/molecules/ConfirmSignUpForm';

export default function SignUp() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout>
        <FormCard
          title="Your profile has been approved"
          subtitle="You are just one step from being a Freemancer"
        >
          <ConfirmSignUpForm />
        </FormCard>
      </UserLayout>
    </React.Fragment>
  );
}
