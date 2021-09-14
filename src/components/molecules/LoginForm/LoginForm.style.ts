import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useLoginFormStyle = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '520px',
      marginTop: theme.spacing(1),
    },
    alert: {
      width: '100%',
    },
    submitButton: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);
