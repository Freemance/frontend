import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileTimelineStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '6px 16px',
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    spinner: {
      marginLeft: theme.spacing(2),
    },
  })
);
