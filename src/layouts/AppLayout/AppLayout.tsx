import * as React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';
import Hero from '@components/organisms/Hero';
import CardLandContainer from '@components/organisms/CardLandContainer';
import TitleSection from '@components/atoms/TitleSection';

const AppLayout: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
        <TitleSection text="Advantajes" />
        <CardLandContainer />
      </Container>
    </>
  );
};

export default AppLayout;
