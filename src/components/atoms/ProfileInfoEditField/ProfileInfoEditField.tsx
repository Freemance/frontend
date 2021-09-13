import React from 'react';
import { TextField } from '@material-ui/core';

import IProfileInfoEditField from './types';

const ProfileInfoEditField = ({
  id,
  name,
  label,
  required,
  multiline,
  value,
  onChange,
  error,
  onBlur,
  helperText,
}: IProfileInfoEditField) => {
  return (
    <TextField
      id={id}
      name={name}
      required={required}
      multiline={multiline}
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      error={error}
      onBlur={onBlur}
      helperText={helperText}
    />
  );
};

export default ProfileInfoEditField;
