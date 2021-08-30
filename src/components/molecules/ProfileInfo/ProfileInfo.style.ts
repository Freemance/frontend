import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileInfoStyle = makeStyles((theme: Theme) =>
  createStyles({
    contain: {
      paddingTop: theme.spacing(3),
    },
  })
);
