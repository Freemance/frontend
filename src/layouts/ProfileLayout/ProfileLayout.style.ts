import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useProfileLayoutStyle = makeStyles((theme: Theme) =>
  createStyles({
    contain: {
      paddingTop: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    containEdit: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  })
);
