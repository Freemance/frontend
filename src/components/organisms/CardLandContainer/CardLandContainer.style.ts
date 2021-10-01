import { Theme, makeStyles } from '@material-ui/core/styles';

export const useCardLandContainer = makeStyles((theme: Theme) => ({
  root: {
    marginTop: '5%',
    '& div:nth-child(3) .MuiPaper-root': {
      background: theme.palette.primary.main,
      color: `${theme.palette.primary.contrastText} !important`,
      '& svg': {
        color: theme.palette.primary.contrastText,
      },
      '& .titlecard': {
        color: theme.palette.primary.contrastText,
      },
      '& .descriptioncard': {
        color: theme.palette.primary.contrastText,
      },
    },
  },
}));
