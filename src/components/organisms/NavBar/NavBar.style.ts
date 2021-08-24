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
      marginRight: '0px',
      paddingRight: '0px',
      color: 'gray',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    buttons: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'inline',
      },
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
