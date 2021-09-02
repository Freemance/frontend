import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useProfileBodyStyle = makeStyles((theme: Theme) =>
  createStyles({
    contain: {
      marginTop: theme.spacing(4),
    },
    addProjectCard: {
      height: '100%',
      maxWidth: 260,
    },
    addProjectCardAction: {
      height: '100%',
    },
    addProjectCardContent: {
      display: 'flex',
      justifyContent: 'center',
      padding: 20,
    },
  })
);
