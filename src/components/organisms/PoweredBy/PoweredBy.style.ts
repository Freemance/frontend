import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const usePoweredStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '120px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: '-50px',
      },
    },
  })
);
