import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useSponsorsStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
);
