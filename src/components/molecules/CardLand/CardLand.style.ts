import { makeStyles, Theme } from '@material-ui/core';

export const useCardLandStyles = makeStyles((theme: Theme) => ({
  paper: {
    transition: 'all 850ms cubic-bezier(0.19, 1, 0.22, 1)',
    '&:hover': {
      // transform: 'scale(1.01)',
      cursor: 'pointer',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 20px',
    },
    width: '100%',
    height: '100%',
    textAlign: 'left',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  icono: {
    width: '60px',
    fill: '#ef5258',
    height: '60px',
    fontSize: '3rem',
    backgroundColor: 'transparent',
    color: theme.palette.error.dark,
    '& svg': {
      width: '3rem',
      height: '3rem',
      strokeWidth: 1,
    },
  },
  titlecard: {
    marginTop: '10px',
    fontWeight: 600,
  },
  descriptioncard: {
    marginTop: '20px',
    fontSize: 17,
  },
}));
