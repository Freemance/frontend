import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useSignUpFormStyle = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
  })
);
