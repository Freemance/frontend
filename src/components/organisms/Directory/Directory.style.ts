import { Theme, makeStyles } from '@material-ui/core/styles';

export const useDirectoryStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '2%',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2%',
    verticalAlign: 'middle',
  },
  loading: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  errordata: {
    color: theme.palette.error.main,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  menu: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    height: '37px',
    marginLeft: '20px',
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
    marginLeft: '10px',
    display: 'flex',
    width: '50px',
    height: '100%',
    color: 'gray',
  },
}));
