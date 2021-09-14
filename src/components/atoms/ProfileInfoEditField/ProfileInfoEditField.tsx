import React from 'react';
import { TextField } from '@material-ui/core';

import IProfileInfoEditField from './types';

const ProfileInfoEditField = ({
  label,
  defaultValue,
  required,
  multiline,
}: IProfileInfoEditField) => {
  return (
    <TextField
      required={required}
      multiline={multiline}
      label={label}
      defaultValue={defaultValue}
      variant="outlined"
      fullWidth
    />
  );
};

export default ProfileInfoEditField;
