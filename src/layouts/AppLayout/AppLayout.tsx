import * as React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';
import Hero from '@components/organisms/Hero';
import CardLandContainer from '@components/organisms/CardLandContainer';
import TitleSection from '@components/atoms/TitleSection';
import DescriptionSection from '@components/atoms/DescriptionSection';

const AppLayout: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
        <TitleSection text="Advantajes" />
        <DescriptionSection text="Find now with professionals from all fields, and hire them for dedicated jobs, pay from Slyk and contact them" />
        <CardLandContainer />
      </Container>
    </>
  );
};

export default AppLayout;
