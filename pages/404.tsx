import React from 'react';
import NotFound from '@components/atoms/Icons/404';
import { Container, Typography } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';
import Head from 'next/head';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Freemance - Not Found 404</title>
        <meta name="description" content="Freemance - Page not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <NavBar />
        <NotFound />
        <Link href="/">
          <Typography
            variant="body1"
            style={{
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'underline',
              cursor: 'pointer',
              marginTop: '2px',
            }}
          >
            Go Back
          </Typography>
        </Link>
        <Typography
          variant="h3"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-70px',
          }}
        >
          404: This page doesnt exist
        </Typography>
      </Container>
    </>
  );
};

export default Custom404;
