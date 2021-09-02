import React from 'react';
import {
  Avatar,
  Badge,
  Container,
  IconButton,
  Typography,
} from '@material-ui/core';
import { CameraAlt as CameraIcon } from '@material-ui/icons';

import { useProfileAvatarStyle } from './ProfileAvatar.style';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileAvatar = () => {
  const classes = useProfileAvatarStyle();

  const { isEdit } = useProfileContext();

  return (
    <Container>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={
          isEdit && (
            <IconButton className={classes.avatarButton}>
              <CameraIcon />
            </IconButton>
          )
        }
      >
        <Avatar className={classes.avatar}>
          <Typography className={classes.avatarText} variant="h1">
            F
          </Typography>
        </Avatar>
      </Badge>
    </Container>
  );
};

export default ProfileAvatar;
