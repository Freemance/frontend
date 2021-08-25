import * as React from 'react';
import { Container } from '@material-ui/core';
import LoginCard from '@components/organisms/LoginCard';
import { useUserLayoutStyle } from './UserLayout.style';

const UserLayout: React.FC = () => {
  const classes = useUserLayoutStyle();
  return (
    <>
      <Container maxWidth="sm" className={classes.contain}>
        <LoginCard />
      </Container>
    </>
  );
};

export default UserLayout;
