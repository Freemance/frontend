import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useSignUpFormStyle = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '520px',
      marginTop: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  })
);
