import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import {
  Call as CallIcon,
  Description as DescriptionIcon,
} from '@material-ui/icons';

import ProfileAvatar from '@components/molecules/ProfileAvatar';
import ProfileInfo from '@components/molecules/ProfileInfo';
import { useProfileHeaderStyle } from './ProfileHeader.style';

const ProfileHeader = () => {
  const classes = useProfileHeaderStyle();

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
      <Grid item md={3}>
        <ProfileAvatar />
        <div className={classes.buttonsContainer}>
          <IconButton className={classes.headerButton}>
            <CallIcon />
          </IconButton>
          <IconButton className={classes.headerButton}>
            <DescriptionIcon />
          </IconButton>
        </div>
      </Grid>
      <Grid item md={9}>
        <ProfileInfo />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
