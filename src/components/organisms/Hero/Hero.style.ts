import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useHeroStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '10%',
      flexGrow: 1,
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        marginTop: '50%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    ndescription: {
      fontStyle: 'oblique',
      fontWeight: 'bold',
      color: theme.palette.error.main,
      marginBottom: '5%',
    },
    ntitle: {
      fontWeight: 900,
      marginBottom: '5%',
    },
    outline: {
      '&:hover': { borderColor: theme.palette.error.main },
      color: theme.palette.error.main,
      marginLeft: '0px',
      borderColor: theme.palette.error.main,
      [theme.breakpoints.up(391)]: {
        marginLeft: '10px',
      },
    },
    mockup: {
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '90vh',
      marginTop: '-120px',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 'auto',
        marginTop: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 'auto',
        height: 'auto',
      },
    },
  })
);
