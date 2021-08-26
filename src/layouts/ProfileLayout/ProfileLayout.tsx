import React from 'react';
import { Container } from '@material-ui/core';

import { IProfileLayout } from './types';
import { useProfileLayoutStyle } from './ProfileLayout.style';

const ProfileLayout = ({ children }: IProfileLayout) => {
  const classes = useProfileLayoutStyle();

  return (
    <Container className={classes.contain} maxWidth="lg">
      {children}
    </Container>
  );
};

export default ProfileLayout;
