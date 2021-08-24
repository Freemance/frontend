import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

/**
 * Light colors palette
 */
export const lightPalette = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#000c83',
    main: '#3366ff',
    light: '#4674FF',
    lightBg: 'rgba(51,102,255,.12)!important',
    gradient: 'linear-gradient(47deg,#3366ff,#4674FF)',
    boxShadow: '0 0 3px 1px rgb(51 102 255 / 70%)',
  },
  secondary: {
    contrastText: white,
    dark: '#122744',
    main: '#283B54',
    light: '#49596C',
    lightBg: 'rgba(18,39,68,.12)',
    gradient: 'linear-gradient(47deg,#283B54,#49596C)',
    boxShadow: '0 0px 3px 1px #283B54',
  },
  success: {
    contrastText: white,
    dark: '#2AA549',
    main: '#33C758',
    light: '#57D175',
    lightBg: 'rgba(51,199,88,.12)',
    gradient: 'linear-gradient(47deg,#33C758,#57D175)',
    boxShadow: '0 8px 3px 1px #33C758',
  },
  info: {
    contrastText: white,
    dark: '#00A1B5',
    main: '#00CFE8',
    light: '#1CE7FF',
    lightBg: 'rgba(0,207,232,.12)',
    gradient: 'linear-gradient(47deg,#00CFE8,#1CE7FF)',
    boxShadow: '0 8px 3px 1px #00CFE8',
  },
  warning: {
    contrastText: white,
    dark: '#FEB856',
    main: '#FFC16C',
    light: '#FFCA81',
    lightBg: 'rgba(255,193,108,.12)',
    gradient: 'linear-gradient(47deg,#FFC16C,#FFCA81)',
    boxShadow: '0 8px 3px 1px #FFC16C',
  },
  error: {
    contrastText: white,
    dark: '#e42728',
    main: '#ea5455',
    light: '#f08182',
    lightBg: 'rgba(234,84,85,.12)',
    gradient: 'linear-gradient(47deg,#ea5455,#f08182)',
    boxShadow: '0 8px 3px 1px #ea5455',
  },
  text: {
    primary: '#122744',
    secondary: '#414ca5',
  },
  background: {
    default: '#F7FBFE',
    paper: white,
    gradient:
      'linear-gradient(90deg, hsla(206, 78%, 98%, 1) 0%, hsla(204, 87%, 94%, 1) 0.2%, hsla(208, 88%, 97%, 1) 0.4%, hsla(200, 86%, 97%, 1) 0.6%, hsla(206, 78%, 98%, 1) 0.8%)',
  },
  shadows: {
    card: '0 4px 24px 0 rgb(34 41 47 / 10%)',
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};

/**
 * Dark colors palette
 */
export const darkPalette = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#4839eb',
    main: '#7367f0',
    light: '#7367f0',
    lightBg: 'rgba(115,103,240,.12)!important',
    gradient: 'linear-gradient(47deg,#7367f0,#9e95f5)',
    boxShadow: '0 0 10px 1px rgb(115 103 240 / 70%)',
  },
  secondary: {
    contrastText: white,
    dark: '#696d71',
    main: '#82868b',
    light: '#9ca0a4',
    lightBg: 'rgba(130,134,139,.12)',
    gradient: 'linear-gradient(47deg,#82868b,#9ca0a4)',
    boxShadow: '0 8px 25px -8px #82868b',
  },
  success: {
    contrastText: white,
    dark: '#1f9d57',
    main: '#28c76f',
    light: '#48da89',
    lightBg: 'rgba(40,199,111,.12)',
    gradient: 'linear-gradient(47deg,#28c76f,#48da89)',
    boxShadow: '0 8px 25px -8px #28c76f',
  },
  info: {
    contrastText: white,
    dark: '#00a1b5',
    main: '#00cfe8',
    light: '#1ce7ff',
    lightBg: 'rgba(0,207,232,.12)',
    gradient: 'linear-gradient(47deg,#00cfe8,#1ce7ff)',
    boxShadow: '0 8px 25px -8px #00cfe8',
  },
  warning: {
    contrastText: white,
    dark: '#ff8510',
    main: '#ff9f43',
    light: '#ffb976',
    lightBg: 'rgba(255,159,67,.12)',
    gradient: 'linear-gradient(47deg,#ff9f43,#ffb976)',
    boxShadow: '0 8px 25px -8px #ff9f43',
  },
  error: {
    contrastText: white,
    dark: '#e42728',
    main: '#ea5455',
    light: '#f08182',
    lightBg: 'rgba(234,84,85,.12)',
    gradient: 'linear-gradient(47deg,#ea5455,#f08182)',
    boxShadow: '0 8px 25px -8px #ea5455',
  },
  text: {
    primary: '#6e6b7b',
    secondary: '#a6a4b0',
  },
  background: {
    default: '#F8F8F8',
    paper: white,
    gradient:
      'linear-gradient(180deg,hsla(0,0%,97.3%,.95) 44%,hsla(0,0%,97.3%,.46) 73%,hsla(0,0%,100%,0))',
  },
  shadows: {
    card: '0 4px 24px 0 rgb(34 41 47 / 10%)',
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
