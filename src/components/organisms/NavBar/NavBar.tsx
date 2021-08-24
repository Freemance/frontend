import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerNav from '@components/molecules/Drawer';
// Styles
import { useNavBarStyle } from './NavBar.style';

const NavBar = () => {
  const classes = useNavBarStyle();

  return (
    <div className={classes.root}>
      {/* <DrawerNav /> */}
      <AppBar
        style={{ background: 'transparent', boxShadow: 'none' }}
        position="static"
      >
        <Toolbar>
          <Link href="/" underline="none">
            <Typography className={classes.title} variant="h3">
              Freemance
            </Typography>
          </Link>
          <Hidden xsDown>
            <Button
              color="primary"
              style={{ marginRight: '8px', marginLeft: 'auto' }}
            >
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
