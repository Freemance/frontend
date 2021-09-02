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
      '& .icono': {
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      },
      '& .descriptioncard': {
        color: '#c7bda7',
      },
    },
    width: '100%',
    maxHeight: '35vh',
    height: '100%',
    textAlign: 'center',
    marginBottom: '10%',
    [theme.breakpoints.down('lg')]: {
      width: 'auto',
      height: '35vh',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      height: '25vh',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: '30vh',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      height: 'auto',
    },
  },
  icono: {
    margin: 'auto',
    width: '60px',
    height: '60px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  titlecard: {
    marginTop: '10px',
  },
  descriptioncard: {
    marginTop: '20px',
  },
}));