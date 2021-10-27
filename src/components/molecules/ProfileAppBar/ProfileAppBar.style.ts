import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileAppBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.default,
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
    logo: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: { marginLeft: '-30px' },
    },
    backButton: {
      color: theme.palette.primary.contrastText,
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      color: theme.palette.primary.main,
      cursor: 'pointer',
      alignContent: 'center',
      marginLeft: '-14px',
      flexWrap: 'wrap',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    spantitle: {
      color: theme.palette.error.main,
    },
  })
);
