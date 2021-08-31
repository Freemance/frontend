import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useProfileEditBarStyle } from './ProfileEditBar.style';

const ProfileEditBar = () => {
  const classes = useProfileEditBarStyle();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Button className={classes.cancelButton}>Cancel</Button>
        <Button className={classes.saveButton}>Save</Button>
      </Toolbar>
    </AppBar>
  );
};

export default ProfileEditBar;
