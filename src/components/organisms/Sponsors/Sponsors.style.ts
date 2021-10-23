import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useSponsorsStyle = makeStyles((theme: Theme) =>
  createStyles({
    qvapay: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: '-20%',
        marginBottom: '10%',
      },
    },
    bitremesas: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: '-28.8%',
        marginBottom: '10%',
      },
    },
    slyk: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '6.8%',
      marginBottom: '10%',
      [theme.breakpoints.down('xs')]: {
        marginTop: '-4.8%',
      },
    },
    kwelta: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '4%',
      [theme.breakpoints.down('xs')]: {
        marginTop: '6.8%',
        marginBottom: '20%',
      },
    },
  })
);
