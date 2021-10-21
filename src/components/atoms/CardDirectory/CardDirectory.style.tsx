import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useCardDirectoryStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 'none',
      width: 'auto',
      minHeight: '320px',
      justifyContent: 'center',
      flexDirection: 'row',
      cursor: 'pointer',
      [theme.breakpoints.down('lg')]: {
        width: 'auto',
        marginLeft: '0px',
      },
      background: 'transparent',
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      borderRadius: '10px',
      width: '184.8px',
      minHeight: '184.8px',
      maxHeight: '184.8px',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    },
    titlecard: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    job: {
      justifyContent: 'center',
      display: 'flex',
      marginBottom: '20px',
    },
    tags: {
      display: 'flex',
      justifyContent: 'center',
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
  })
);
