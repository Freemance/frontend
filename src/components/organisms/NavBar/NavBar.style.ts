import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useNavBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: '0px',
      marginLeft: 'auto',
      color: 'gray',
    },
    title: {
      flexGrow: 1,
      display: 'block',
      color: theme.palette.primary.main,
      cursor: 'pointer',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    spantitle: {
      color: theme.palette.error.main,
    },
  })
);
