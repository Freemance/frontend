import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileEditBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    editAppBar: {
      backgroundColor: theme.palette.primary.light,
    },
    logoutButton: {
      marginLeft: 'auto',
    },
    cancelButton: {
      marginLeft: 'auto',
      backgroundColor: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
      },
      color: theme.palette.error.light,
    },
    saveButton: {
      marginLeft: theme.spacing(2),
      backgroundColor: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
      },
      color: theme.palette.primary.main,
    },
    title: {
      flexGrow: 1,
      display: 'block',
      color: theme.palette.primary.main,
      cursor: 'pointer',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    spantitle: {
      color: theme.palette.error.main,
    },
  })
);
