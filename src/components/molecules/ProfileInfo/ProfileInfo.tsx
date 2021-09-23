import React, { useEffect } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useProfileInfoStyle } from './ProfileInfo.style';
import ProfileInfoField from '@components/atoms/ProfileInfoField';
import { useProfileContext } from '@layouts/ProfileLayout';
import ProfileInfoEditField from '@components/atoms/ProfileInfoEditField';
import { ActionType, useGlobalContext } from 'src/context';
import SubmitButton from '@components/atoms/SubmitButton';
import { useMutation } from '@apollo/client';
import { PROFILE_UPDATE_INFO } from 'src/lib/apollo/user/mutations';
import { IProfileUpdateInfo, IProfileUpdateInfoRes } from 'src/lib/apollo/user';

const ProfileInfo = () => {
  const classes = useProfileInfoStyle();

  const { isEdit, isUser, profile } = useProfileContext();
  const { dispatch, state } = useGlobalContext();

  const [updateProfile, { error, loading, data }] = useMutation<
    IProfileUpdateInfoRes,
    IProfileUpdateInfo
  >(PROFILE_UPDATE_INFO);

  const currentProfile = isUser ? state.user.profile : profile;

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({
        type: ActionType.UpdateProfile,
        payload: data.profileUpdateBasicInfo,
      });
    }
  }, [data]);

  return isEdit ? (
    <Formik
      initialValues={{
        firstName: currentProfile.firstName,
        lastName: currentProfile.lastName,
        jobTitle: currentProfile.jobTitle,
        bio: currentProfile.bio,
        phone: currentProfile.phone,
        city: currentProfile.city,
        country: currentProfile.country,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Required').nullable(),
        lastName: Yup.string().required('Required').nullable(),
        jobTitle: Yup.string().required('Required').nullable(),
        bio: Yup.string().required('Required').nullable(),
        phone: Yup.string().required('Required').nullable(),
        city: Yup.string().required('Required').nullable(),
        country: Yup.string().required('Required').nullable(),
      })}
      onSubmit={(values) => {
        updateProfile({
          variables: {
            input: {
              firstName: values.firstName,
              lastName: values.lastName,
              jobTitle: values.jobTitle,
              bio: values.bio,
              phone: values.phone,
              city: values.city,
              country: values.country,
            },
          },
        });
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid
            container
            className={classes.contain}
            justifyContent="flex-start"
            spacing={4}
          >
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs>
                  <ProfileInfoEditField
                    id="firstName"
                    name="firstName"
                    label="First name"
                    required
                    value={values.firstName}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs>
                  <ProfileInfoEditField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    required
                    value={values.lastName}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                disabled
                label="Slyk URL"
                defaultValue={currentProfile.slykUser}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileInfoEditField
                id="jobTitle"
                name="jobTitle"
                label="Job"
                required
                value={values.jobTitle}
                error={touched.jobTitle && Boolean(errors.jobTitle)}
                helperText={touched.jobTitle && errors.jobTitle}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileInfoEditField
                id="bio"
                name="bio"
                label="Bio"
                required
                multiline
                value={values.bio}
                error={touched.bio && Boolean(errors.bio)}
                helperText={touched.bio && errors.bio}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileInfoEditField
                id="phone"
                name="phone"
                label="Phone"
                required
                value={values.phone}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                disabled
                label="Email"
                defaultValue={user.email}
                variant="outlined"
                fullWidth
              /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileInfoEditField
                id="city"
                name="city"
                required
                label="City"
                value={values.city}
                error={touched.city && Boolean(errors.city)}
                helperText={touched.city && errors.city}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileInfoEditField
                required
                id="country"
                name="country"
                label="Country"
                value={values.country}
                error={touched.country && Boolean(errors.country)}
                helperText={touched.country && errors.country}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Alert className={classes.alert} severity="error">
                  Sorry, there{"'"}s been an error
                </Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              <SubmitButton label="Save" isLoading={loading} />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  ) : (
    <Grid
      container
      className={classes.contain}
      justifyContent="flex-start"
      spacing={4}
    >
      <Grid item xs={12}>
        <div className={classes.nameBox}>
          <Typography variant="h2">
            {currentProfile.firstName} {currentProfile.lastName}
          </Typography>
          <Typography variant="subtitle1">{currentProfile.slykUser}</Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProfileInfoField title="Job" value={currentProfile.jobTitle} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProfileInfoField title="Bio" value={currentProfile.bio} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProfileInfoField title="Phone" value={currentProfile.phone} />
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <ProfileInfoField title="Email" value={user.email} /> */}
      </Grid>
      <Grid item xs={6}>
        <ProfileInfoField title="City" value={currentProfile.city} />
      </Grid>
      <Grid item xs={6}>
        <ProfileInfoField title="Country" value={currentProfile.country} />
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
