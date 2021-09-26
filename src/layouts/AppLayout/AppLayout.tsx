import * as React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';
import Hero from '@components/organisms/Hero';
import CardLandContainer from '@components/organisms/CardLandContainer';
import TitleSection from '@components/atoms/TitleSection';
import DescriptionSection from '@components/atoms/DescriptionSection';
import SliderFMProfiles from '@components/molecules/SliderFMProfiles/SliderFMProfiles';
import Footer from '@components/organisms/Footer';
// Internacionalizacion
import { useTranslation } from 'react-i18next';
import Sponsors from '@components/organisms/Sponsors/Sponsors';
const AppLayout: React.FC = () => {
  const [t] = useTranslation('landpage');
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
        <TitleSection text={t('applayout.titlesection1')} />
        <DescriptionSection text={t('applayout.descsection1')} />
        <CardLandContainer />
        <TitleSection text={t('applayout.titlesection5')} />
        <DescriptionSection text={t('applayout.descsection5')} />
        <Sponsors />
        <TitleSection text={t('applayout.titlesection3')} />
        <DescriptionSection text={t('applayout.descsection3')} />
        <SliderFMProfiles />
      </Container>
      <Footer />
    </>
  );
};

export default AppLayout;
