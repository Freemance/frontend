import { makeStyles } from '@material-ui/core';

export const useDrawerStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    height: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
    height: '100%',
    background: '#122744',
  },
  buttonOfClose: {
    display: 'flex',
    marginLeft: 'auto',
    color: '#ffff',
  },
}));
