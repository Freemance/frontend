import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useLoginCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: '25%',
      padding: 12,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
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
