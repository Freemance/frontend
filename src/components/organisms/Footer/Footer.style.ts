import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useFooterStyle = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      background: theme.palette.primary.dark,
      height: '230px',
      [theme.breakpoints.down('md')]: {
        height: 'auto',
      },
    },
    container: {
      paddingTop: '60px',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    },
    link: {
      fontSize: '21px',
      marginBottom: '25px',
      cursor: 'pointer',
      display: 'block',
      justifyContent: 'center',
    },

    button: {
      marginTop: '3%',
      marginLeft: '4%',
      alignItems: 'center',
      '&:hover': {
        '& svg': {
          color: theme.palette.info.light,
          transform: 'scale(1.01)',
        },
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '0px',
        height: '100%',
      },
    },
  })
);
