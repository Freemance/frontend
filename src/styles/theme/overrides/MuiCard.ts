import { CardClassKey, StyleRules } from '@material-ui/core';
import * as palettes from '../palettes';

export const MuiCard: Partial<StyleRules<CardClassKey>> = {
  root: {
    background: `
      linear-gradient(${palettes.lightPalette.background.paper},
      ${palettes.lightPalette.background.paper}) padding-box,
      linear-gradient(to right top, #979fe3, rgb(255 255 255 / 0%)) border-box`,
    borderRadius: 20,
    border: '1px solid transparent',
    boxShadow: 'none',
  },
};
