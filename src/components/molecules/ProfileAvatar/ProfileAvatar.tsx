import React from 'react';
import { Avatar, Container, Typography } from '@material-ui/core';

import { useProfileAvatarStyle } from './ProfileAvatar.style';

const ProfileAvatar = () => {
  const classes = useProfileAvatarStyle();

  return (
    <Container>
      <Avatar className={classes.avatar}>
        <Typography className={classes.avatarText} variant="h1">
          F
        </Typography>
      </Avatar>
    </Container>
  );
};

export default ProfileAvatar;
