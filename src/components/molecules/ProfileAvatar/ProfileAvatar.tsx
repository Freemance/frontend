import React, { useState } from 'react';
import {
  Avatar,
  Badge,
  Container,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  CameraAlt as CameraIcon,
  Clear as ClearIcon,
  CloudUpload as UploadIcon,
} from '@material-ui/icons';

import { useProfileAvatarStyle } from './ProfileAvatar.style';
import { useProfileContext } from '@layouts/ProfileLayout';
import IProfileAvatar from './types';
import { useGlobalContext } from 'src/context';

const ProfileAvatar = ({ previewUrl, onUploadPicture }: IProfileAvatar) => {
  const classes = useProfileAvatarStyle();

  const { state } = useGlobalContext();
  const { isEdit, isUser, profile } = useProfileContext();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getInitials = (isUser: boolean): string => {
    return isUser
      ? `${state.user.profile.firstName[0].toUpperCase()}${state.user.profile.lastName[0].toUpperCase()}`
      : `${profile.firstName[0].toUpperCase()}${profile.lastName[0].toUpperCase()}`;
  };

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
            <IconButton
              className={classes.avatarButton}
              onClick={handleClickOpen}
            >
              <CameraIcon />
            </IconButton>
          )
        }
      >
        <Avatar className={classes.avatar} src={previewUrl}>
          <Typography className={classes.avatarText} variant="h1">
            {getInitials(isUser)}
          </Typography>
        </Avatar>
      </Badge>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Change profile picture</DialogTitle>
        <List>
          <input
            accept="image/*"
            className={classes.imageInput}
            id="upload-image-button"
            multiple
            type="file"
            onChange={(e) => {
              onUploadPicture(e);
              handleClose();
            }}
          />
          <label htmlFor="upload-image-button">
            <ListItem button>
              <ListItemAvatar>
                <Avatar className={classes.avatarButton}>
                  <UploadIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Upload picture" />
            </ListItem>
          </label>
          <ListItem autoFocus button onClick={handleClose}>
            <ListItemAvatar>
              <Avatar>
                <ClearIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </Container>
  );
};

export default ProfileAvatar;
