import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useLoginFormStyle = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    alert: {
      width: '100%',
    },
  })
);
