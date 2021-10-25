import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useSponsorsStyle = makeStyles((theme: Theme) =>
  createStyles({
    qvapay: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(1),
      },
    },
    bitremesas: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(2),
      },
    },
    slyk: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(2),
      },
    },
    kwelta: {
      display: 'flex',
      justifyContent: 'center',

      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(2),
      },
    },
  })
);
