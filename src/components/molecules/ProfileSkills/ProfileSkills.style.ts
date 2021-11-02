import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useProfileSkillsStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'box',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    chip: {
      padding: '4px',
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      '& svg': {
        margin: 5,
      },
    },
    deleteButton: {
      color: theme.palette.error.main,
    },
    spinner: {
      marginLeft: theme.spacing(2),
    },
  })
);
