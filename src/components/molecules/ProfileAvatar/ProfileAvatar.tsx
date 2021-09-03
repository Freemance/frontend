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

const ProfileAvatar = () => {
  const classes = useProfileAvatarStyle();

  const { isEdit } = useProfileContext();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Avatar className={classes.avatar}>
          <Typography className={classes.avatarText} variant="h1">
            F
          </Typography>
        </Avatar>
      </Badge>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Change profile picture</DialogTitle>
        <List>
          <ListItem button onClick={() => {}}>
            <ListItemAvatar>
              <Avatar className={classes.avatarButton}>
                <UploadIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Upload picture" />
          </ListItem>
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
