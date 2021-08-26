import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';

import { useProfileHeaderStyle } from './ProfileHeader.style';

const ProfileHeader = () => {
  const classes = useProfileHeaderStyle();

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Avatar className={classes.avatar}>
          <Typography className={classes.avatarText} variant="h1">
            F
          </Typography>
        </Avatar>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
