import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileTabStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
    },
  })
);
