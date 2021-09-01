import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';

import { useProfileEditBarStyle } from './ProfileEditBar.style';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileEditBar = () => {
  const classes = useProfileEditBarStyle();

  const { setIsEdit } = useProfileContext();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Button
          className={classes.cancelButton}
          onClick={() => setIsEdit(false)}
        >
          Cancel
        </Button>
        <Button className={classes.saveButton} onClick={() => setIsEdit(false)}>
          Save
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ProfileEditBar;
