import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
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
          <Typography className={classes.title} variant="h4" noWrap>
            Freemance
          </Typography>
          <div className={classes.buttons}>
            <Button
              color="inherit"
              style={{ marginRight: '8px', color: 'gray' }}
            >
              Login
            </Button>
            <Button color="inherit" style={{ background: '#6886c5' }}>
              Get Early Access
            </Button>
          </div>
          <IconButton edge="end" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
