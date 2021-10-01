import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: '1rem',
      right: '1.5rem',
      transition: 'all .4s ease-in-out',
    },
    isHidde: {
      opacity: 0,
    },
    isVisible: {
      opacity: 1,
    },
    arrowIcon: {
      color: theme.palette.info.contrastText,
      transform: `rotate(270deg)`,
      transformOrigin: 'center',
    },
    scrollToBtn: {
      display: 'block',
      backgroundColor: theme.palette.info.main,

      '&:hover': {
        backgroundColor: theme.palette.info.dark,
      },
    },
  })
);

export default useStyles;
