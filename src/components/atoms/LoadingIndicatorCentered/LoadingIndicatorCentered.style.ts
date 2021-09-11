import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useLoadingIndicatorCenteredStyle = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      overflow: 'auto',
    },
  })
);
