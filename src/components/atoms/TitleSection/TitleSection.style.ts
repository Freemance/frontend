import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useTitleSectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    patitle: {
      marginTop: '10%',
      borderLeft: `thick solid ${theme.palette.primary.main}`,
      spacing: 8,
    },
    title: {
      fontWeight: 900,
      marginLeft: '2%',
    },
  })
);
