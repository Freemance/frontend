import React from 'react';
import Head from 'next/head';
import { Directory } from '@components/organisms/Directory/Directory';
import { NextSeo } from 'next-seo';
export default function Index() {
  return (
    <>
      <Head>
        <title>Freemance - Directory</title>
        <meta
          name="description"
          content="Explore the range of possibilities now and hire a freelancer for your business"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: 'Freemance - Directory',
          description:
            'Explore the range of possibilities now and hire a freelancer for your business',
          url: 'Directory of Freemancers',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}images/cover.png`,
              width: 600,
              height: 600,
            },
          ],
        }}
      />
      <Directory />
    </>
  );
}
