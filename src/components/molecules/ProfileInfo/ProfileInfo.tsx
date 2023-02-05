import React, { useEffect, useState } from 'react';
import { Grid, Link, TextField, Typography } from '@material-ui/core';
import { Alert, Autocomplete } from '@material-ui/lab';
import { ClassNameMap } from '@material-ui/styles';
import { useQuery } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useProfileInfoStyle } from './ProfileInfo.style';
import ProfileInfoField from '@components/atoms/ProfileInfoField';
import { useProfileContext } from '@layouts/ProfileLayout';
import ProfileInfoEditField from '@components/atoms/ProfileInfoEditField';
import { useGlobalContext } from 'src/context';
import SubmitButton from '@components/atoms/SubmitButton';
import IProfileInfo from './types';
import { ProfileStatus, TagType } from 'src/context/state';
import { AVAILABLE_TAGS, IAvailableTagsRes } from 'src/lib/apollo/tags';

const ProfileInfo = ({ isLoading, error, handleSaveInfo }: IProfileInfo) => {
  const classes: ClassNameMap<any> = useProfileInfoStyle();

  const { isEdit, isUser, profile } = useProfileContext();
  const { state } = useGlobalContext();

  const currentProfile = isUser ? state.user.profile : profile;

  const [availableTags, setAvailableTags] = useState<TagType[]>([]);

  const { data: availableTagsData } =
    useQuery<IAvailableTagsRes>(AVAILABLE_TAGS);

  useEffect(() => {
    if (availableTagsData) {
      const tempTags = availableTagsData.filterTags.edges.map(
        (edge) => edge.node
      );
      setAvailableTags(tempTags);
    }
  }, [availableTagsData]);

  return isEdit ? (
    <Formik
      initialValues={{
        firstName: currentProfile.firstName,
        lastName: currentProfile.lastName,
        slyk: currentProfile.slykUser,
        professionId: currentProfile.tag ? currentProfile.tag.id : '',
        jobTitle: currentProfile.jobTitle,
        bio: currentProfile.bio,
        phone: currentProfile.phone,
        city: currentProfile.city,
        country: currentProfile.country,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Required').nullable(),
        lastName: Yup.string().required('Required').nullable(),
        slyk: Yup.string().required('Required').nullable(),
        professionId: Yup.number().required('Required'),
        jobTitle: Yup.string().required('Required').nullable(),
        bio: Yup.string().required('Required').nullable(),
        phone: Yup.string().nullable(),
        city: Yup.string().required('Required').nullable(),
        country: Yup.string().required('Required').nullable(),
      })}
      onSubmit={(values) => {
        handleSaveInfo(
          {
            firstName: values.firstName,
            lastName: values.lastName,
            slykUser:
              currentProfile.profileStatus === ProfileStatus.APPROVED
                ? undefined
                : values.slyk,
            jobTitle: values.jobTitle,
            bio: values.bio,
            phone: values.phone,
            city: values.city,
            country: values.country,
          },
          values.professionId
        );
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
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
                disabled={
                  currentProfile.profileStatus === ProfileStatus.APPROVED
                }
                label="Slyk URL"
                variant="outlined"
                fullWidth
                required
                name="slyk"
                value={values.slyk}
                error={touched.slyk && Boolean(errors.slyk)}
                helperText={touched.slyk && errors.slyk}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="profession"
                options={availableTags}
                defaultValue={currentProfile.tag}
                getOptionLabel={(option) => option.name}
                onChange={(e, newValue: TagType | null) => {
                  setFieldValue('professionId', newValue?.id || '');
                }}
                onOpen={handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="profession"
                    label="Area"
                    variant="outlined"
                    error={touched.professionId && Boolean(errors.professionId)}
                    helperText={touched.professionId && errors.professionId}
                    required
                    fullWidth
                  />
                )}
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
                id="phone"
                name="phone"
                label="Phone"
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
              <SubmitButton label="Save" isLoading={isLoading} />
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
          <Typography variant="subtitle1">
            <Link
              href={`https://${currentProfile.slykUser}`}
              target="_blank"
              color="inherit"
            >
              {currentProfile.slykUser}
            </Link>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <ProfileInfoField title="Bio" value={currentProfile.bio} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProfileInfoField
          title="Area"
          value={currentProfile.tag ? currentProfile.tag.name : ''}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProfileInfoField title="Job" value={currentProfile.jobTitle} />
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <ProfileInfoField title="Email" value="-" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProfileInfoField title="Phone" value={currentProfile.phone} />
      </Grid> */}
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
