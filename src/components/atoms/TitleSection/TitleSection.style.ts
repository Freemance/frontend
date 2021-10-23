import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useTitleSectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    patitle: {
      marginTop: '10%',
      textAlign: 'center',
    },
    title: {
      fontWeight: 900,
      marginLeft: '2%',
      marginBottom: 35,
      fontSize: 43,
      [theme.breakpoints.down('xs')]: {
        lineHeight: '40px',
      },
    },
  })
);
