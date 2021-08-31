import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileAvatarStyle = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.primary.light,
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    avatarText: {
      color: theme.palette.primary.contrastText,
    },
    avatarButton: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  })
);
