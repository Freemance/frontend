import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useFormCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: 32,
      display: 'flex',
      [theme.breakpoints.up('xs')]: {
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        borderRadius: '0px',
        marginTop: '0%',
        height: '100vh',
        width: '100%',
      },
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    title: {
      fontWeight: 700,
    },
    subTitle: {
      color: theme.palette.text.secondary,
      fontWeight: 600,
    },
  })
);
