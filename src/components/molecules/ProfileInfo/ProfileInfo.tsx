import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useProfileInfoStyle } from './ProfileInfo.style';
import ProfileInfoField from '@components/atoms/ProfileInfoField';

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
        <ProfileInfoField title="Job" value="Software developer" />
      </Grid>
      <Grid item xs={6}>
        <ProfileInfoField
          title="Bio"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat."
        />
      </Grid>
      <Grid item xs={6}>
        <ProfileInfoField title="Phone" value="+1-234-1323-1235" />
      </Grid>
      <Grid item xs={6}>
        <ProfileInfoField title="Email" value="johndoe@mail.com" />
      </Grid>
      <Grid item xs={6}>
        <ProfileInfoField title="City" value="Miami, FL" />
      </Grid>
      <Grid item xs={6}>
        <ProfileInfoField title="Country" value="United States" />
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
