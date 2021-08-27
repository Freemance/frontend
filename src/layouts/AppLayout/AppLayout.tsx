import * as React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';
import Hero from '@components/organisms/Hero';
import CardLandContainer from '@components/organisms/CardLandContainer';

const AppLayout: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
        <CardLandContainer />
      </Container>
    </>
  );
};

export default AppLayout;
