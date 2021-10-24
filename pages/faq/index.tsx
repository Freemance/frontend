import React from 'react';
import FAQContainer from '@components/molecules/FAQContainer/FAQContainer';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@material-ui/core';
import Head from 'next/head';
import NavBar from '@components/organisms/NavBar';
import Footer from '@components/organisms/Footer';
import { NextSeo } from 'next-seo';
function FAQ() {
  const [t] = useTranslation('landpage');
  return (
    <div>
      <Head>
        <title>Freemance - FAQ</title>
        <meta
          name="description"
          content="Do you have any questions about freemance? Explore here the answers to the most common questions that our users ask us"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: 'Freemance - FAQ',
          description:
            'Do you have any questions about freemance? Explore here the answers to the most common questions that our users ask uss',
          url: 'Frequent questions',
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}images/cover.png`,
              width: 1200,
              height: 1200,
            },
          ],
        }}
      />
      <NavBar />
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          style={{
            display: 'flex',
            fontWeight: 900,
            marginLeft: '2%',
            marginBottom: 35,
            fontSize: 43,
            justifyContent: 'center',
          }}
        >
          {t('applayout.titlesection2')}
        </Typography>
        <FAQContainer />
      </Container>
      <Footer />
    </div>
  );
}

export default FAQ;
