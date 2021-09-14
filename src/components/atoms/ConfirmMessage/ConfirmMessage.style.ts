import { createStyles, makeStyles } from '@material-ui/core/styles';
export const useConfirmMessageStyle = makeStyles(() =>
  createStyles({
    info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30%',
    },
  })
);
