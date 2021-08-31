import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import { useProfileLayoutStyle } from './ProfileLayout.style';
import { ProfileContext } from './ProfileLayout.context';
import ProfileHeader from '@components/organisms/ProfileHeader';
import ProfileBody from '@components/organisms/ProfileBody';
import ProfileEditBar from '@components/molecules/ProfileEditBar';

const ProfileLayout = () => {
  const classes = useProfileLayoutStyle();

  const isUser: boolean = true;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <Container
      className={isEdit ? classes.containEdit : classes.contain}
      maxWidth="md"
    >
      <ProfileContext.Provider value={{ isUser, isEdit, setIsEdit }}>
        {isEdit && <ProfileEditBar />}
        <ProfileHeader />
        <ProfileBody />
      </ProfileContext.Provider>
    </Container>
  );
};

export default ProfileLayout;
