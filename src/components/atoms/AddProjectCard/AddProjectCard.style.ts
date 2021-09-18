import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useAddProjectCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    addProjectCard: {
      height: '100%',
      maxWidth: 260,
      [theme.breakpoints.down('xs')]: {
        minWidth: 260,
      },
    },
    addProjectCardAction: {
      height: '100%',
    },
    addProjectCardContent: {
      display: 'flex',
      justifyContent: 'center',
      padding: 20,
    },
    media: {
      height: 180,
    },
    dialogImageCard: {
      width: '100%',
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    spinner: {
      marginLeft: theme.spacing(2),
    },
  })
);
