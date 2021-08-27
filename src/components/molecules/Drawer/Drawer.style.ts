import { makeStyles, Theme } from '@material-ui/core';

export const useDrawerStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: '100%',
    height: '100%',
  },
  drawerPaper: {
    width: '100%',
    height: '100%',
    background: theme.palette.secondary.dark,
  },
  buttonOfClose: {
    display: 'flex',
    marginLeft: 'auto',
    color: theme.palette.primary.contrastText,
  },
}));
