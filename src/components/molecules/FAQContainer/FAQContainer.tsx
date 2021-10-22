import React from 'react';
import FAQ from '@components/atoms/FAQ/FAQ';
import { useFAQContainerStyles } from './FAQContainer.style';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
const FAQContainer = () => {
  const [t] = useTranslation('landpage');
  const classes = useFAQContainerStyles();
  return (
    <>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.ancla}>
          <span className={classes.fizzer}>|</span>
          {t('faq.ancla1')}
        </Typography>
        <FAQ question={t('faq.question1')} answer={t('faq.answer1')} />
        <FAQ question={t('faq.question2')} answer={t('faq.answer2')} />
        <FAQ question={t('faq.question3')} answer={t('faq.answer3')} />
        <FAQ question={t('faq.question4')} answer={t('faq.answer4')} />
        <FAQ question={t('faq.question5')} answer={t('faq.answer5')} />
        <FAQ question={t('faq.question6')} answer={t('faq.answer6')} />
        <FAQ question={t('faq.question7')} answer={t('faq.answer7')} />
        <FAQ question={t('faq.question8')} answer={t('faq.answer8')} />
        <Typography variant="h2" className={classes.ancla}>
          <span className={classes.fizzer}>|</span>
          {t('faq.ancla2')}
        </Typography>
        <div id="mvs">
          <FAQ
            question={t('faq.question1-ancla2')}
            answer={t('faq.answer1-ancla2')}
          />
        </div>
      </div>
    </>
  );
};

export default FAQContainer;
