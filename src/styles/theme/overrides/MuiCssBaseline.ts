import * as palettes from '../palettes';

export const MuiCssBaseline = {
  '@global': {
    body: {
      background: palettes.lightPalette.background.gradient,
      '& .sticky > .sticky-inner > .header-container > .header-logo': {
        margin: 'auto 2rem',
      },

      '& .sticky-inner': {
        transition: '1s ease background-color',
      },
      '& .sticky-wrapper': {
        position: 'absolute',
        zIndex: 1301,
        width: '100%',
        top: 0,
      },
      '& .sticky .sticky-inner': {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255, .96)',
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      },
    },
  },
};
