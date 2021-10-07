import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
export const useHeroStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '10%',
      flexGrow: 1,
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        marginTop: '10%',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '20%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    hero: {
      display: 'block',
      position: 'relative',
      '&:before': {
        width: '58%',
        content: `" "`,
        display: 'block',
        zIndex: -1,
        position: 'absolute',
        transform: 'rotate(10deg)',
        minHeight: 673,
        borderRadius: 159,
        top: -263,
        left: -162,
        background: 'linear-gradient(-60deg,#b3d3f2,hsla(0,0%,100%,0) 55%)',
        [theme.breakpoints.down('md')]: {
          width: '75%',
          top: -353,
        },
        [theme.breakpoints.down('sm')]: {
          width: '93%',
          left: -112,
        },
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          left: -64,
        },
      },
    },
    ndescription: {
      fontStyle: 'oblique',
      fontWeight: 500,
      color: theme.palette.error.main,
      marginBottom: '5%',
      fontSize: '1.2rem',
    },
    ntitle: {
      fontWeight: 900,
      marginBottom: '5%',
      fontSize: '3rem',
      lineHeight: 1,
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        fontSize: '2.5rem',
      },
    },
    heroCallToAction: {
      position: 'relative',
      [theme.breakpoints.down('xs')]: {
        width: '80%',
        margin: 'auto',
      },
    },
    outline: {
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid !important',
      borderColor: theme.palette.error.main,
      '&:hover': {
        border: '1px solid',
        borderColor: theme.palette.error.main,
        '&:after': {
          left: '120%',
          transition: 'all 850ms cubic-bezier(0.19, 1, 0.22, 1)',
        },
      },
      color: theme.palette.error.main,
      marginLeft: '0px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: '10px',
      },
      '& span': {
        zIndex: 20,
      },
      '&:after': {
        background: theme.palette.error.main,
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
    mockup: {
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: '-120px',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 'auto',
        marginTop: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 'auto',
        height: 'auto',
      },
    },
    btn: {
      border: '0 solid',
      boxShadow: `inset 0 0 20px rgba(234,84,85, 0)`,
      outlineOffset: 0,
      textShadow: 'none',
      transition: 'all 1250ms cubic-bezier(0.19, 1, 0.22, 1)',
      marginTop: 20,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  })
);
