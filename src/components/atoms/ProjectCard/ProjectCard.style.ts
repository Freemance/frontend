import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProjectCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      minHeight: 300,
      maxWidth: 260,
    },
    media: {
      height: 180,
    },
  })
);
