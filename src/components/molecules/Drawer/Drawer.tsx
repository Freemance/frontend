import * as React from 'react';
import { Drawer, IconButton } from '@material-ui/core';
//  Styles
import { useDrawerStyles } from './Drawer.style';
import DrawerList from '@components/atoms/DrawerList';
import CloseIcon from '@material-ui/icons/Close';
import IDrawer from './types';

const DrawerNav = ({ variant, open, handleDrawerClose }: IDrawer) => {
  const classes = useDrawerStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant={variant}
      open={open}
      classes={{ paper: classes.drawerPaper }}
    >
      <IconButton
        onClick={() => handleDrawerClose()}
        className={classes.buttonOfClose}
      >
        <CloseIcon />
      </IconButton>
      <DrawerList text="Sign In" link="login" />
      <DrawerList text="Get Early Access" link="signup" />
    </Drawer>
  );
};
export default DrawerNav;
