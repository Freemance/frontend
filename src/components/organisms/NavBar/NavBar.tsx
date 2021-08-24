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
// Styles
import { useNavBarStyle } from './NavBar.style';

const NavBar = () => {
  const classes = useNavBarStyle();

  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: 'transparent', boxShadow: 'none' }}
        position="static"
      >
        <Toolbar>
          <Typography className={classes.title} variant="h3">
            Freemance
          </Typography>
          <Hidden xsDown>
            <Button color="primary" style={{ marginRight: '8px' }}>
              Login
            </Button>
            <Button color="primary" variant="contained">
              Get Early Access
            </Button>
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
