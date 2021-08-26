import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
} from '@material-ui/core';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerNav from '@components/molecules/Drawer';
// Styles
import { useNavBarStyle } from './NavBar.style';

const NavBar: React.FC = () => {
  const classes = useNavBarStyle();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <DrawerNav
          variant="persistent"
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
      </Hidden>
      <AppBar
        style={{ background: 'transparent', boxShadow: 'none' }}
        position="relative"
      >
        <Toolbar disableGutters={true}>
          <div className="hello">
            <Link href="/">
              <Typography className={classes.title} variant="h2">
                Free<span className={classes.spantitle}>mance</span>
              </Typography>
            </Link>
          </div>
          <Hidden xsDown>
            <Link href="/login">
              <Button
                color="primary"
                style={{ marginRight: '8px', marginLeft: 'auto' }}
              >
                Login
              </Button>
            </Link>

            <Button color="primary" variant="contained">
              Get Early Access
            </Button>
          </Hidden>
          <Hidden smUp>
            <IconButton
              onClick={() => handleDrawerOpen()}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
