import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useProfileSkillsStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    chip: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    spinner: {
      marginLeft: theme.spacing(2),
    },
  })
);
