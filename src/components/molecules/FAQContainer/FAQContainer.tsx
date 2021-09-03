import React from 'react';
import FAQ from '@components/atoms/FAQ/FAQ';
import { useFAQContainerStyles } from './FAQContainer.style';
const FAQContainer = () => {
  const classes = useFAQContainerStyles();
  return (
    <div className={classes.container}>
      <FAQ
        question="What is freemance"
        answer="Freemance is a platform associated with Slyk whose main objective is to give visibility to Cuban freelancers towards the international labor market, all payments are made through the slyk platform as well as the view of the freemancer's catalog, this platform works as a directory that you access if you want to have more visibility or find freelancers more easily."
      />
      <FAQ question="Ejemplo" answer="Hola" />
      <FAQ question="Hola" answer="Ejemplo" />
    </div>
  );
};

export default FAQContainer;
