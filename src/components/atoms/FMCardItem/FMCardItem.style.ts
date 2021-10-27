import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useFMCardItem = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 'none',
      width: '50vh',
      justifyContent: 'center',
      flexDirection: 'row',
      marginLeft: '5vh',
      [theme.breakpoints.down('lg')]: {
        width: 'auto',
        marginLeft: '0px',
      },
      background: theme.palette.background.default,
      cursor: 'pointer',
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      borderRadius: '10px',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    },
    avatarWrapp: {
      '& div:nth-child(1)': {
        width: '70%',
        height: '70%',
        margin: '0 auto !important',
      },
    },
    noavatar: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: '10px',
      width: '70%',
      height: '70%',
    },
    tags: {
      display: 'flex',
    },
    titlecard: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    job: {
      textAlign: 'center',
      justifyContent: 'center',
      display: 'flex',
      marginBottom: '20px',
    },
    tag: {
      marginLeft: '4px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      borderRadius: '10px',
      '& :hover': {
        background: theme.palette.error.main,
        borderRadius: '6px',
      },
    },
    tagcontainer: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
);
