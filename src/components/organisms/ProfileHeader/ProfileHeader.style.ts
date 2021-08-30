import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useProfileHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    headerButton: {
      backgroundColor: theme.palette.primary.dark,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
      color: theme.palette.primary.contrastText,
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
);
