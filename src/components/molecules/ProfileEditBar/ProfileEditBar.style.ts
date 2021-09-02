import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileEditBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.light,
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
  })
);
