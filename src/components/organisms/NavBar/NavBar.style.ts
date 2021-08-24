import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useNavBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: '0px',
      marginLeft: '0px',
      color: 'gray',
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
