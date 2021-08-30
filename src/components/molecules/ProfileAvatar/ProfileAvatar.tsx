import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';

import { useProfileAvatarStyle } from './ProfileAvatar.style';

const ProfileAvatar = () => {
  const classes = useProfileAvatarStyle();

  return (
    <Box display="flex" justifyContent="center">
      <Avatar className={classes.avatar}>
        <Typography className={classes.avatarText} variant="h1">
          F
        </Typography>
      </Avatar>
    </Box>
  );
};

export default ProfileAvatar;
