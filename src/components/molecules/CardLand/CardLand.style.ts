import { makeStyles, Theme } from '@material-ui/core';

export const useCardLandStyles = makeStyles((theme: Theme) => ({
  paper: {
    '&:hover': {
      background: theme.palette.primary.main,
      cursor: 'pointer',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 20px',
      // border: '1px solid transparent',
      '& .titlecard': {
        color: theme.palette.primary.contrastText,
      },
    },
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    marginBottom: '10%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  imagen: {
    margin: 'auto',
    width: '60px',
    height: '60px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
  },
  titlecard: {
    marginTop: '20px',
  },
}));
