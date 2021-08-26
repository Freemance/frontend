import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useProfileBodyStyle = makeStyles((theme: Theme) =>
  createStyles({
    contain: {
      marginTop: theme.spacing(6),
    },
  })
);
