import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useFMCardItem = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50vh',
      justifyContent: 'center',
      flexDirection: 'row',
      marginLeft: '5vh',
      [theme.breakpoints.down('lg')]: {
        width: 'auto',
        marginLeft: '0px',
      },
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
      margin: 'auto',
      width: '60px',
      height: '60px',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    },
    tags: {
      display: 'flex',
    },
    titlecard: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    job: {
      justifyContent: 'center',
      display: 'flex',
      marginBottom: '20px',
    },
    tag: {
      marginLeft: '4px',
      backgroundColor: 'transparent',
      border: '1px solid gray',
      borderRadius: '10px',
    },
    tagcontainer: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
);
