import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileTabStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: 350,
      padding: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(0),
        paddingBottom: theme.spacing(3),
        paddingRight: theme.spacing(0),
      },
    },
  })
);
