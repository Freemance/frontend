import React, { useEffect, useState } from 'react';
import { Fab, Grid, IconButton } from '@material-ui/core';
import {
  Call as CallIcon,
  Description as DescriptionIcon,
  Edit as EditIcon,
} from '@material-ui/icons';

import ProfileAvatar from '@components/molecules/ProfileAvatar';
import ProfileInfo from '@components/molecules/ProfileInfo';
import { useProfileHeaderStyle } from './ProfileHeader.style';
import { useProfileContext } from '@layouts/ProfileLayout';
import { useMutation } from '@apollo/client';
import { PROFILE_UPDATE_INFO } from 'src/lib/apollo/user/mutations';
import {
  IProfileUpdateInfo,
  IProfileUpdateInfoInput,
  IProfileUpdateInfoRes,
} from 'src/lib/apollo/user';
import { ActionType, useGlobalContext } from 'src/context';

const ProfileHeader = () => {
  const classes = useProfileHeaderStyle();

  const { dispatch } = useGlobalContext();
  const { isUser, isEdit, setIsEdit } = useProfileContext();

  const [avatarPreview, setAvatarPreview] = useState<string>(null);
  const [avatarFile, setAvatarFile] = useState<File>(null);

  const handleAvatarUpload = ({ target: { validity, files } }: any) => {
    if (files && validity.valid) {
      setAvatarPreview(URL.createObjectURL(files[0]));
      setAvatarFile(files[0]);
    }
  };

  const [updateProfile, { error, loading, data }] = useMutation<
    IProfileUpdateInfoRes,
    IProfileUpdateInfo
  >(PROFILE_UPDATE_INFO);

  useEffect(() => {
    if (data) {
      dispatch({
        type: ActionType.UpdateProfile,
        payload: data.profileUpdateBasicInfo,
      });
      setAvatarPreview(null);
      setAvatarFile(null);
    }
  }, [data]);

  const handleUpdateProfileInfo = (updatedInfo: IProfileUpdateInfoInput) => {
    updateProfile(
      avatarFile
        ? {
            variables: {
              file: avatarFile,
              input: updatedInfo,
            },
          }
        : {
            variables: {
              input: updatedInfo,
            },
          }
    );
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
      <Grid item md={3}>
        <ProfileAvatar
          previewUrl={avatarPreview}
          onUploadPicture={handleAvatarUpload}
        />
        {!isEdit && (
          <div className={classes.buttonsContainer}>
            {isUser ? (
              <Fab
                variant="extended"
                className={classes.headerButton}
                onClick={() => setIsEdit(true)}
              >
                Edit
                <EditIcon className={classes.editIcon} />
              </Fab>
            ) : (
              <>
                <IconButton className={classes.headerButton}>
                  <CallIcon />
                </IconButton>
                <IconButton className={classes.headerButton}>
                  <DescriptionIcon />
                </IconButton>
              </>
            )}
          </div>
        )}
      </Grid>
      <Grid item md={9}>
        <ProfileInfo
          isLoading={loading}
          error={error}
          handleSaveInfo={handleUpdateProfileInfo}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
