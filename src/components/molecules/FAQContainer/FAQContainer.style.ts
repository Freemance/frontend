import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useFAQContainerStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: '5%',
      marginBottom: '10%',
    },
    ancla: {
      fontWeight: 500,
      marginLeft: '2%',
      marginBottom: 35,
      fontSize: 34,
    },
    fizzer: {
      fontWeight: 'bold',
    },
  })
);
