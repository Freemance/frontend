import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useProfileContext } from '@layouts/ProfileLayout';
import { useProfileAppBarStyle } from './ProfileAppBar.style';
import { deleteToken } from 'src/services/token';
import { ActionType, useGlobalContext } from 'src/context';

const ProfileAppBar = () => {
  const classes = useProfileAppBarStyle();

  const { dispatch } = useGlobalContext();
  const { setIsEdit, isEdit, isUser } = useProfileContext();

  const router = useRouter();

  return (
    <AppBar
      className={isEdit ? classes.editAppBar : classes.appBar}
      position="absolute"
      elevation={0}
    >
      <Toolbar>
        {isEdit ? (
          <IconButton
            className={classes.backButton}
            onClick={() => setIsEdit(false)}
          >
            <ArrowBackIcon />
          </IconButton>
        ) : (
          <>
            <Link href="/">
              <Typography className={classes.title} variant="h2">
                Free<span className={classes.spantitle}>mance</span>
              </Typography>
            </Link>
            {isUser && (
              <Button
                className={classes.logoutButton}
                variant="outlined"
                onClick={() => {
                  deleteToken('access-token');
                  deleteToken('refresh-token');
                  router.replace('/');
                  dispatch({
                    type: ActionType.RemoveUser,
                  });
                }}
              >
                Logout
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ProfileAppBar;
