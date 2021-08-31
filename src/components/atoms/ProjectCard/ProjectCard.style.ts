import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useProjectCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 260,
    },
    media: {
      height: 180,
    },
  })
);