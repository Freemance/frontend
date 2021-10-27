import * as React from 'react';
import Head from 'next/head';
import AppLayout from '@layouts/AppLayout';
import { NextSeo } from 'next-seo';
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Freemance - Hire and Contact Profesionals</title>
        <meta
          name="description"
          content="Join to become a Freemancer in minutes, receive payments through Qvapay and hire through Slyk"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: 'Freemance - Hire and Contact Profesionals',
          description:
            'Join to become a Freemancer in minutes, receive payments through Qvapay and hire through Slyk',
          url: 'Join to become a freemancer or hire one',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/cover.png`,
              width: 1200,
              height: 1200,
            },
          ],
        }}
      />
      <AppLayout />
    </React.Fragment>
  );
}
