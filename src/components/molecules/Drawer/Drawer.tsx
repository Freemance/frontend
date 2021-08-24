import React from 'react';
import { Drawer, IconButton } from '@material-ui/core';
//  Styles
import { useDrawerStyles } from './Drawer.style';
import DrawerList from '@components/atoms/DrawerList';
import CloseIcon from '@material-ui/icons/Close';

const DrawerNav = () => {
  const classes = useDrawerStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <IconButton className={classes.buttonofclose}>
        <CloseIcon />
      </IconButton>
      <DrawerList text="Sign In" link="login" />
      <DrawerList text="Get Early Access" link="register" />
    </Drawer>
  );
};
export default DrawerNav;
