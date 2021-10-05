import * as React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Avatar,
} from '@material-ui/core';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerNav from '@components/molecules/Drawer';
// Styles
import { useNavBarStyle } from './NavBar.style';
import { useTranslation } from 'react-i18next';
import { getToken } from '../../../services/token/index';
import { Me } from 'src/lib/apollo/query/Me';
import { useQuery } from '@apollo/client';

const NavBar: React.FC = () => {
  const [t] = useTranslation('landpage');
  const classes = useNavBarStyle();
  const token = getToken('access-token');
  const [avatar, setAvatar] = React.useState(undefined);
  const {} = useQuery(Me, {
    context: {
      headers: { autorization: `bearer < ${token} >` },
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      setAvatar(data.me.profile.avatar);
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
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
        className={clsx('sticky-inner', classes.stickyInner, classes.header)}
      >
        <Toolbar disableGutters={true}>
          <div className="hello">
            <Link href="/">
              <Typography className={classes.title} variant="h2">
                Free<span className={classes.spantitle}>mance</span>
              </Typography>
            </Link>
          </div>
          {token ? (
            <Link href="/profile">
              <Avatar
                src={`${process.env.IMAGE_LINK}${avatar}`}
                style={{ marginLeft: 'auto', cursor: 'pointer' }}
              />
            </Link>
          ) : (
            <>
              <Hidden xsDown>
                <Link href="/login">
                  <Button
                    color="primary"
                    style={{ marginRight: '8px', marginLeft: 'auto' }}
                  >
                    {t('navbar.buttonlogin')}
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button color="primary" variant="contained">
                    {t('navbar.buttonaccess')}
                  </Button>
                </Link>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
