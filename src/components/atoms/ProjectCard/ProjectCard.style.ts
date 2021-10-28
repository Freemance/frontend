import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProjectCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: 260,
    },
    media: {
      height: 180,
      backgroundPositionX: 'center',
      backgroundPositionY: 'top',
      backgroundSize: 'cover',
    },
    mediaDialog: {
      width: 180,
      height: 180,
    },
    projectDescription: {
      maxHeight: 56,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
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
