import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useUserLayoutStyle = makeStyles((theme: Theme) =>
  createStyles({
    contain: {
      display: 'flex',
      height: '100vh',
      width: '100%',
      paddingRight: '0px',
      paddingLeft: '0px',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
