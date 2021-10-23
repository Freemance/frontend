import React from 'react';
import PasswordRec from '@components/atoms/PasswordRec/PasswordRec';
import Head from 'next/head';
const PasswordRecovery = () => {
  return (
    <>
      <Head>
        <title>Freemance - Reset Password</title>
        <meta
          name="description"
          content="You forgot the password, don't worry, reset it here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PasswordRec />
      </div>
    </>
  );
};

export default PasswordRecovery;
