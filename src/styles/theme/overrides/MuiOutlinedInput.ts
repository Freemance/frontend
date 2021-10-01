import { InputClassKey, StyleRules } from '@material-ui/core';

export const MuiOutlinedInput: Partial<StyleRules<InputClassKey>> = {
  root: {
    borderRadius: '.5rem',
    textTransform: 'capitalize',
    borderWidth: '2px',
  },
};
