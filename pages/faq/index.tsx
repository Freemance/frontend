import React from 'react';
import FAQContainer from '@components/molecules/FAQContainer/FAQContainer';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@material-ui/core';
import Head from 'next/head';
import NavBar from '@components/organisms/NavBar';
function FAQ() {
  const [t] = useTranslation('landpage');
  return (
    <div>
      <Head>
        <title>Freemance - FAQ</title>
        <meta name="description" content="Freemance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <NavBar />
        <Typography
          variant="h1"
          style={{ display: 'flex', marginTop: '5%', justifyContent: 'center' }}
        >
          {t('applayout.titlesection2')}
        </Typography>
        <FAQContainer />
      </Container>
    </div>
  );
}

export default FAQ;
