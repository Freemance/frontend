import * as React from 'react';
import { Container } from '@material-ui/core';

import { useUserLayoutStyle } from './UserLayout.style';
import IUserLayout from './types';

const UserLayout = ({ children }: IUserLayout) => {
  const classes = useUserLayoutStyle();
  return (
    <>
      <Container maxWidth="sm" className={classes.contain}>
        {children}
      </Container>
    </>
  );
};

export default UserLayout;
