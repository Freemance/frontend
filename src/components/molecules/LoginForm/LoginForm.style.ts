import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useLoginFormStyle = makeStyles((theme: Theme) =>
  createStyles({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);
