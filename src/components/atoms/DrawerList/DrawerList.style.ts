import { makeStyles } from '@material-ui/core';

export const useDrawerListStyle = makeStyles((theme) => ({
  drawerList: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: '25%',
    width: 'auto',
    height: 'auto',
    borderRadius: '20px',
  },
  textstyle: {
    color: '#ffff',
  },
}));
