import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useSubmitButtonStyle = makeStyles((theme: Theme) =>
  createStyles({
    // submit: {
    //   margin: theme.spacing(3, 0, 2),
    // },
    spinner: {
      marginLeft: theme.spacing(2),
    },
  })
);
