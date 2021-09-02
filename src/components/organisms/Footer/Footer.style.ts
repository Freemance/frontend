import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useFooterStyle = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      background: theme.palette.primary.dark,
      height: 'auto',
      [theme.breakpoints.down('md')]: {
        height: '100%',
      },
    },
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    },
    link: {
      cursor: 'pointer',
      display: 'block',
      justifyContent: 'center',
    },
    grilla1: {
      marginTop: '1.5%',
    },
    grilla2: {
      marginTop: '1%',
    },
    button: {
      marginTop: '3%',
      border: '1px solid #fff',
      height: 'auto',
      width: '8vh',
      marginLeft: '4%',
      borderRadius: '20px',
      '&:hover': {
        borderColor: theme.palette.primary.light,
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '0px',
        height: '100%',
      },
    },
  })
);