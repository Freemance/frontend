import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const usePasswordRecStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '15%',
    },
    alert: {
      width: '100%',
    },
    submitButton: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);
