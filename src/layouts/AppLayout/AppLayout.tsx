import * as React from 'react';
import { Container, Typography } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';
import Hero from '@components/organisms/Hero';
const AppLayout: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
      </Container>
    </>
  );
};

export default AppLayout;
