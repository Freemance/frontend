import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import { IProfileLayout } from './types';
import { useProfileLayoutStyle } from './ProfileLayout.style';
import { ProfileContext } from './ProfileLayout.context';

const ProfileLayout = ({ children }: IProfileLayout) => {
  const classes = useProfileLayoutStyle();

  const isUser: boolean = true;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <Container className={classes.contain} maxWidth="md">
      <ProfileContext.Provider value={{ isUser, isEdit, setIsEdit }}>
        {children}
      </ProfileContext.Provider>
    </Container>
  );
};

export default ProfileLayout;
