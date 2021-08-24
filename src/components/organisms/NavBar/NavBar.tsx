import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerNav from '@components/molecules/Drawer';
// Styles
import { useNavBarStyle } from './NavBar.style';

const NavBar = () => {
  const classes = useNavBarStyle();

  return (
    <div className={classes.root}>
      <DrawerNav />
      <AppBar
        style={{ background: 'transparent', boxShadow: 'none' }}
        position="static"
      >
        <Toolbar>
          <Typography className={classes.title} variant="h3">
            Freemance
          </Typography>
          <Hidden xsDown>
            </Button>
            <Button color="primary">Get Early Access</Button>
          </Hidden>
          <Hidden smUp>
            <IconButton edge="start" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
