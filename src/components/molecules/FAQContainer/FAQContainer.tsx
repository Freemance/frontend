import React from 'react';
import FAQ from '@components/atoms/FAQ/FAQ';
import { useFAQContainerStyles } from './FAQContainer.style';
import { useTranslation } from 'react-i18next';
const FAQContainer = () => {
  const [t] = useTranslation('landpage');
  const classes = useFAQContainerStyles();
  return (
    <div className={classes.container}>
      <FAQ question={t('faq.question1')} answer={t('faq.answer1')} />
      <FAQ question={t('faq.question2')} answer={t('faq.answer2')} />
      <FAQ question={t('faq.question3')} answer={t('faq.answer3')} />
    </div>
  );
};

export default FAQContainer;
