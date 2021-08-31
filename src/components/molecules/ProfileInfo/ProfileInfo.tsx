import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { useProfileInfoStyle } from './ProfileInfo.style';
import ProfileInfoField from '@components/atoms/ProfileInfoField';
import { useProfileContext } from '@layouts/ProfileLayout';
import ProfileInfoEditField from '@components/atoms/ProfileInfoEditField';

const ProfileInfo = () => {
  const classes = useProfileInfoStyle();

  const { isEdit } = useProfileContext();

  return (
    <Grid
      container
      className={classes.contain}
      justifyContent="flex-start"
      spacing={4}
    >
      {isEdit ? (
        <>
          <Grid item sm={6}>
            <ProfileInfoEditField
              label="Name"
              defaultValue="John Doe"
              required
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              disabled
              label="Slyk URL"
              defaultValue="johndoe.slyk.io"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoEditField
              label="Job"
              required
              defaultValue="Software developer"
            />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoEditField
              label="Bio"
              required
              multiline
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat."
            />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoEditField
              label="Phone"
              required
              defaultValue="+1-234-1323-1235"
            />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoEditField
              required
              label="Email"
              defaultValue="johndoe@mail.com"
            />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoEditField
              required
              label="City"
              defaultValue="Miami, FL"
            />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoEditField
              required
              label="Country"
              defaultValue="United States"
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <div className={classes.nameBox}>
              <Typography variant="h2">John Doe</Typography>
              <Typography variant="subtitle1">johndoe.slyk.io</Typography>
            </div>
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoField title="Job" value="Software developer" />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoField
              title="Bio"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat."
            />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoField title="Phone" value="+1-234-1323-1235" />
          </Grid>
          <Grid item sm={6}>
            <ProfileInfoField title="Email" value="johndoe@mail.com" />
          </Grid>
          <Grid item xs={6}>
            <ProfileInfoField title="City" value="Miami, FL" />
          </Grid>
          <Grid item xs={6}>
            <ProfileInfoField title="Country" value="United States" />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ProfileInfo;
