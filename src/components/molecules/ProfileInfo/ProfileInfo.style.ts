import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileInfoStyle = makeStyles((theme: Theme) =>
  createStyles({
    contain: {
      paddingTop: theme.spacing(3),
    },
    nameBox: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
      },
    },
    saveButton: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  })
);
