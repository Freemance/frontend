import React from 'react';
import { TextField } from '@material-ui/core';
import SubmitButton from '@components/atoms/SubmitButton';

const ConfirmSignUpForm = () => {
  return (
    <>
      <TextField
        color="primary"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <TextField
        color="primary"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        name="confirm-password"
        label="Confirm Password"
        type="password"
        id="confirm-password"
      />
      <SubmitButton label="Confirm" />
    </>
  );
};

export default ConfirmSignUpForm;
