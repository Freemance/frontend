import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProfileAvatarStyle = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.primary.light,
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    avatarWrapp: {
      display: 'block',
      '& div:nth-child(1)': {
        borderRadius: '50%',
        margin: '0 auto !important',
      },
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
    imageInput: {
      display: 'none',
    },
  })
);
