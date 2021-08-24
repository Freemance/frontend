import * as React from 'react';
import { Container, Typography } from '@material-ui/core';
import NavBar from '@components/organisms/NavBar';

const AppLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adip
        </Typography>
      </Container>
    </>
  );
};

export default AppLayout;
