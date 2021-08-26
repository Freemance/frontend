import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useProfileInfoStyle } from './ProfileInfo.style';

const ProfileInfo = () => {
  const classes = useProfileInfoStyle();

  return (
    <Grid
      container
      className={classes.contain}
      justifyContent="flex-start"
      spacing={4}
    >
      <Grid item xs={12}>
        <Typography variant="h2">John Doe</Typography>
        <Typography variant="subtitle1">johndoe.slyk.io</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Job</Typography>
        <Typography variant="h5">Software developer</Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
