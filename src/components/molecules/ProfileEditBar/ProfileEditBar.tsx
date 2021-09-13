import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

import { useProfileEditBarStyle } from './ProfileEditBar.style';
import { useProfileContext } from '@layouts/ProfileLayout';
import IProfileEditBar from './types';
import { deleteToken } from 'src/services/token';
import Link from 'next/link';
import { ActionType, useGlobalContext } from 'src/context';
import { useRouter } from 'next/router';

const ProfileEditBar = ({ isEdit }: IProfileEditBar) => {
  const classes = useProfileEditBarStyle();

  const { dispatch } = useGlobalContext();
  const { setIsEdit } = useProfileContext();

  const router = useRouter();

  return (
    <AppBar
      className={isEdit ? classes.editAppBar : classes.appBar}
      position="fixed"
    >
      <Toolbar>
        {isEdit ? (
          <IconButton className={classes.backButton}>
            <ArrowBackIcon onClick={() => setIsEdit(false)} />
          </IconButton>
        ) : (
          <>
            <Link href="/">
              <Typography className={classes.title} variant="h2">
                Free<span className={classes.spantitle}>mance</span>
              </Typography>
            </Link>
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ProfileEditBar;
