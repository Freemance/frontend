import React from 'react';
import Head from 'next/head';
import { Directory } from '@components/organisms/Directory/Directory';
import { client } from 'src/lib/apollo/connection';
import { ApolloProvider } from '@apollo/client';

export default function Index() {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>Freemance - Hire and Contact Profesionals</title>
          <meta name="description" content="Freemance" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Directory />
      </ApolloProvider>
    </>
  );
}
