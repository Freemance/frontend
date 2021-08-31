import React from 'react';
import { TextField } from '@material-ui/core';

import IProfileInfoEditField from './types';

const ProfileInfoEditField = ({
  label,
  defaultValue,
  required,
}: IProfileInfoEditField) => {
  return (
    <TextField
      required={required}
      label={label}
      defaultValue={defaultValue}
      variant="outlined"
    />
  );
};

export default ProfileInfoEditField;
