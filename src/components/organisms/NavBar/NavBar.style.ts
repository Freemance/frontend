import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useNavBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1.5),
    },
    header: {
      background: 'transparent',
      padding: '0 30px',
    },
    logo: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: { marginLeft: '-30px' },
    },
    stickyInner: {
      transition: '1s ease background-color',
    },
    menuButton: {
      marginRight: '0px',
      marginLeft: 'auto',
      color: 'gray',
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      color: theme.palette.primary.main,
      cursor: 'pointer',
      alignContent: 'center',
      marginLeft: '-14px',
      flexWrap: 'wrap',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    spantitle: {
      color: theme.palette.error.main,
    },
  })
);
