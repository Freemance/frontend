import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useSupportUsStyle = makeStyles((theme: Theme) =>
  createStyles({
    supportBtn: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(1),
      },
    },
    solid: {
      border: '1px solid',
      overflow: 'hidden',
      position: 'relative',
      outlineColor: theme.palette.primary.main,

      '& span': {
        zIndex: 20,
      },

      '&:after': {
        background: '#fff',
        content: `" "`,
        height: 155,
        left: -75,
        opacity: 0.2,
        position: 'absolute',
        top: -50,
        transform: 'rotate(35deg)',
        transition: 'all 550ms cubic-bezier(0.19, 1, 0.22, 1)',
        width: 50,
        zIndex: 10,
      },

      '&:hover': {
        '&:after': {
          left: '120%',
          transition: 'all 850ms cubic-bezier(0.19, 1, 0.22, 1)',
        },
      },
    },
    btn: {
      border: '0 solid',
      boxShadow: `inset 0 0 20px rgba(234,84,85, 0)`,
      outlineOffset: 0,
      textShadow: 'none',
      transition: 'all 1250ms cubic-bezier(0.19, 1, 0.22, 1)',
      textTransform: 'none',
      marginTop: -50,
      marginBottom: 50,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  })
);
