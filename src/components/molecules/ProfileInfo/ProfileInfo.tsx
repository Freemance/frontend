import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useProfileInfoStyle } from './ProfileInfo.style';
import ProfileInfoField from '@components/atoms/ProfileInfoField';
import { useProfileContext } from '@layouts/ProfileLayout';
import ProfileInfoEditField from '@components/atoms/ProfileInfoEditField';
import { useGlobalContext } from 'src/context';

const ProfileInfo = () => {
  const classes = useProfileInfoStyle();

  const { isEdit } = useProfileContext();
  const { state } = useGlobalContext();

  const user = state.user;

  return (
    <Grid
      container
      className={classes.contain}
      justifyContent="flex-start"
      spacing={4}
    >
      {isEdit ? (
        <>
          <Grid item xs={12} sm={6}>
            <ProfileInfoEditField
              label="Name"
              defaultValue={`${user.profile.firstName} ${user.profile.lastName}`}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              label="Slyk URL"
              defaultValue={user.profile.slykUser}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoEditField
              label="Job"
              required
              defaultValue={user.profile.jobTitle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoEditField
              label="Bio"
              required
              multiline
              defaultValue={user.profile.bio}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoEditField
              label="Phone"
              required
              defaultValue={user.profile.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              label="Email"
              defaultValue={user.email}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoEditField
              required
              label="City"
              defaultValue={user.profile.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoEditField
              required
              label="Country"
              defaultValue={user.profile.country}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.saveButton}
              fullWidth
              variant="contained"
            >
              Save
            </Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <div className={classes.nameBox}>
              <Typography variant="h2">
                {user.profile.firstName} {user.profile.lastName}
              </Typography>
              <Typography variant="subtitle1">
                {user.profile.slykUser}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoField title="Job" value={user.profile.jobTitle} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoField title="Bio" value={user.profile.bio} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoField title="Phone" value={user.profile.phone} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfileInfoField title="Email" value={user.email} />
          </Grid>
          <Grid item xs={6}>
            <ProfileInfoField title="City" value={user.profile.city} />
          </Grid>
          <Grid item xs={6}>
            <ProfileInfoField title="Country" value={user.profile.country} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ProfileInfo;
