import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
export const useNavBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'block',
      color: 'black',
      cursor: 'pointer',
      fontFamily: 'Saira',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  })
);
