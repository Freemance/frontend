import React from 'react';
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
        <title>Freemance - Privacy Policy</title>
        <meta
          name="description"
          content="Do you want to know how freemance handles the data?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: 'Freemance - Privacy Policy',
          description: 'Do you want to know how freemance handles the data?',
          url: 'Privacy Policy of Freemance',
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
      <NavBar />
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          style={{ display: 'flex', marginTop: '5%', justifyContent: 'center' }}
        >
          {t('applayout.titlesection4')}
        </Typography>
        <Typography
          variant="h6"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.introduction')}
        </Typography>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question1')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            <>
              •{t('privacy_policy.answer1')}
              <br />
              <hr />•{t('privacy_policy.answer1-1Title')}
              <br />•{t('privacy_policy.answer1-1-1')}
              <br />•{t('privacy_policy.answer1-1-2')}
              <br />•{t('privacy_policy.answer1-1-3')}
              <br />•{t('privacy_policy.answer1-1-4')}
              <br />
              <hr />•{t('privacy_policy.answer1-2Title')}
              <br />•{t('privacy_policy.answer1-2-1')}
              <br />•{t('privacy_policy.answer1-2-2')}
              <br />•{t('privacy_policy.answer1-2-3')}
              <br />
              <hr />•{t('privacy_policy.answer1-3Title')}
              <br />•{t('privacy_policy.answer1-3-1')}
              <br />•{t('privacy_policy.answer1-3-3')}
              <br />
              <hr />•{t('privacy_policy.answer1-4Title')}
              <br />•{t('privacy_policy.answer1-4-1')}
              <br />•{t('privacy_policy.answer1-4-2')}
            </>
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question2')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            <>
              •{t('privacy_policy.answer2')}
              <br />
              <hr />•{t('privacy_policy.answer2-1')}
              <br />•{t('privacy_policy.answer2-2Title')}
              <br />•{t('privacy_policy.answer2-2-1')}
              <br />•{t('privacy_policy.answer2-2-2')}
              <br />•{t('privacy_policy.answer2-2-3')}
              <br />•{t('privacy_policy.answer2-2-4')}
            </>
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question3')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            <>
              •{t('privacy_policy.answer3')}
              <br />
              <hr />•{t('privacy_policy.answer3-1')}
              <br />•{t('privacy_policy.answer3-2')}
              <br />•{t('privacy_policy.answer3-3')}
              <br />•{t('privacy_policy.answer3-4')}
              <br />•{t('privacy_policy.answer3-5')}
              <br />
              <hr />•{t('privacy_policy.answer3-6')}
            </>
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question4')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            <>
              •{t('privacy_policy.answer4-1')}
              <br />•{t('privacy_policy.answer4-2')}
            </>
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question5')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            <>
              •{t('privacy_policy.answer5-1')}
              <br />•{t('privacy_policy.answer5-2')}
              <br />•{t('privacy_policy.answer5-3')}
              <br />•{t('privacy_policy.answer5-4')}
            </>
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question6')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            <>
              •{t('privacy_policy.answer6-1Title')}
              <br />
              <hr />•{t('privacy_policy.answer6-2')}
              <br />•{t('privacy_policy.answer6-3')}
              <br />•{t('privacy_policy.answer6-4')}
              <br />•{t('privacy_policy.answer6-5')}
              <br />•{t('privacy_policy.answer6-6')}
              <br />•{t('privacy_policy.answer6-7')}
              <br />•{t('privacy_policy.answer6-8')}
              <br />
              <hr />
              <strong>{t('privacy_policy.note6')}</strong>
            </>
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question7')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            •{t('privacy_policy.answer7')}
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question8')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            •{t('privacy_policy.answer8')}
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question9')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            <>
              •{t('privacy_policy.answer9Title')}
              <br />•{t('privacy_policy.answer9-1')}
              <br />•{t('privacy_policy.answer9-2')}
            </>
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question10')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            •{t('privacy_policy.answer10')}
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question11')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            •{t('privacy_policy.answer11')}
            <br />•{t('privacy_policy.answer11-1')}
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question12')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '2%' }}
          >
            •{t('privacy_policy.answer12-1')}
            <br />•{t('privacy_policy.answer12-2')}
          </Typography>
        </div>
        <Typography
          variant="h4"
          style={{
            marginTop: '5%',
            marginBottom: '5%',
            justifyContent: 'center',
          }}
        >
          {t('privacy_policy.question13')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            style={{ marginLeft: '4%', marginBottom: '5%' }}
          >
            •{t('privacy_policy.answer13-1')}
            <br />•{t('privacy_policy.answer13-2')}
          </Typography>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default FAQ;
