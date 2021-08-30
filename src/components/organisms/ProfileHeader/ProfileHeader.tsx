import React from 'react';
import { Grid } from '@material-ui/core';

import ProfileAvatar from '@components/molecules/ProfileAvatar';
import ProfileInfo from '@components/molecules/ProfileInfo';

const ProfileHeader = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
      <Grid item md={3}>
        <ProfileAvatar />
      </Grid>
      <Grid item md={9}>
        <ProfileInfo />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
