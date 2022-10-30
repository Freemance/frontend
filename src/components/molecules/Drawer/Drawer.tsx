import * as React from 'react';
import { Drawer, IconButton } from '@material-ui/core';
//  Styles
import { useDrawerStyles } from './Drawer.style';
import DrawerList from '@components/atoms/DrawerList';
import CloseIcon from '@material-ui/icons/Close';
import IDrawer from './types';
// Interacionalizacion
import { useTranslation } from 'react-i18next';

const DrawerNav = ({ variant, open, handleDrawerClose }: IDrawer) => {
  const [t] = useTranslation('landpage');
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
      <DrawerList
        text={t('navbar.buttonblog')}
        link="http://blog.freemance.com/"
      />
      <DrawerList text={t('navbar.buttonlogin')} link="login" />
      <DrawerList text={t('navbar.buttonaccess')} link="signup" />
    </Drawer>
  );
};
export default DrawerNav;
