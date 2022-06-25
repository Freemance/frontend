import React from 'react';
import FAQ from '@components/atoms/FAQ/FAQ';
import { useFAQContainerStyles } from './FAQContainer.style';
import { useTranslation } from 'react-i18next';
const FAQContainer = () => {
  const [t] = useTranslation('landpage');
  const classes = useFAQContainerStyles();
  return (
    <>
      <div className={classes.container}>
        <FAQ question={t('faq.question1')} answer={t('faq.answer1')} />
        <FAQ question={t('faq.question2')} answer={t('faq.answer2')} />
        <FAQ question={t('faq.question3')} answer={t('faq.answer3')} />
        <FAQ question={t('faq.question4')} answer={t('faq.answer4')} />
        <FAQ question={t('faq.question5')} answer={t('faq.answer5')} />
        <FAQ question={t('faq.question6')} answer={t('faq.answer6')} />
        <FAQ question={t('faq.question7')} answer={t('faq.answer7')} />
        <FAQ question={t('faq.question8')} answer={t('faq.answer8')} />
        <FAQ question={t('faq.question9')} answer={t('faq.answer9')} />
        <FAQ question={t('faq.question10')} answer={t('faq.answer10')} />
        <FAQ question={t('faq.question11')} answer={t('faq.answer11')} />
        <FAQ
          question={t('faq.question1-ancla2')}
          answer={t('faq.answer1-ancla2')}
        />
      </div>
    </>
  );
};

export default FAQContainer;
