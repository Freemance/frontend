import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProjectCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: 260,
    },
    media: {
      height: 180,
    },
    mediaDialog: {
      width: 180,
      height: 180,
    },
    dialogImageCard: {
      maxWidth: 260,
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    spinner: {
      marginLeft: theme.spacing(2),
    },
    imageInput: {
      display: 'none',
    },
  })
);
