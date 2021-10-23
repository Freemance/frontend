import * as React from 'react';
// Material-UI Imports
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Avatar,
  Grow,
  Paper,
  Popper,
  MenuList,
  MenuItem,
  ClickAwayListener,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// NextJS Imports
import Link from 'next/link';
import { useRouter } from 'next/router';
// Styles
import { useNavBarStyle } from './NavBar.style';
// Imports from librarys
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
// Imports from Modules
import { useQuery } from '@apollo/client';
import { getToken } from '../../../services/token/index';
import { Me } from 'src/lib/apollo/query/Me';
import DrawerNav from '@components/molecules/Drawer';
import { deleteToken } from 'src/services/token';
import { ActionType, useGlobalContext } from 'src/context';

const NavBar: React.FC = () => {
  // I18N Apply
  const [t] = useTranslation('landpage');
  // Classes for Styles
  const classes = useNavBarStyle();
  // Get Token for verification
  const token = getToken('access-token');
  //  Avatar Menu functions
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { dispatch } = useGlobalContext();
  // This function Logout the user in the menu in landpage
  const Logout = () => {
    deleteToken('access-token');
    deleteToken('refresh-token');
    router.replace('/');
    dispatch({
      type: ActionType.RemoveUser,
    });
  };
  // For handle show of the menu
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  // Handle Close when you press again in the button
  const handleClose = (event: React.MouseEvent<Document>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  // Handling the menu with keys
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  // UseRef for focus in the menu
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // State for the avatar and setAvatar
  const [avatar, setAvatar] = React.useState(undefined);
  // Query for obtain the avatar
  const {} = useQuery(Me, {
    context: {
      headers: { autorization: `bearer < ${token} >` },
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setAvatar(data.me.profile.avatar);
    },
  });

  // State for the drawer when is mobile view and not logged user
  const [openDrawer, setOpenDrawer] = React.useState(false);
  // Function for open the Drawer
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  // Function for close the Drawer
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Hidden smUp>
        <DrawerNav
          variant="persistent"
          open={openDrawer}
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
              <div className={classes.logo}>
                <img
                  src="/logo.svg"
                  width={80}
                  height={80}
                  style={{ marginTop: '0px' }}
                />
                <Typography className={classes.title} variant="h2">
                  Free<span className={classes.spantitle}>mance</span>
                </Typography>
              </div>
            </Link>
          </div>
          {token ? (
            <>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.buttonlogo}
              >
                <Avatar
                  src={`${process.env.IMAGE_LINK}${avatar}`}
                  style={{ display: 'flex', justifyContent: 'center' }}
                />
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start'
                          ? 'left top'
                          : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <Link href="/profile">
                            <MenuItem>Profile</MenuItem>
                          </Link>
                          <MenuItem onClick={Logout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
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
