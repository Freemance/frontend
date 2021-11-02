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
    avatarWrapp: {
      '& div:nth-child(1)': {
        width: '70%',
        height: '70%',
        margin: '0 auto !important',
      },
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      borderRadius: '10px',
      width: '184px',
      minHeight: '184px',
      maxHeight: '184px',
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
      backgroundColor: 'transparent',
      width: 'auto',
      height: 'auto',
      opacity: '1',
      padding: '0',
      borderRadius: '2px',
      display: 'flex',
      justifyContent: 'center',
      itemsAlign: 'center',
    },
  })
);
