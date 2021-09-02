import React from 'react';
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

const ProfileHeader = () => {
  const classes = useProfileHeaderStyle();

  const { isUser, isEdit, setIsEdit } = useProfileContext();

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
      <Grid item md={3}>
        <ProfileAvatar />
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
        <ProfileInfo />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
