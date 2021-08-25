import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import SubmitButton from '@components/atoms/SubmitButton';

const SignUpForm = () => {
  return (
    <>
      <TextField
        color="primary"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        id="name"
        label="Your name"
        name="name"
      />
      <TextField
        color="primary"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <TextField
        color="primary"
        margin="normal"
        variant="outlined"
        required
        fullWidth
        id="slykurl"
        label="Slyk URL"
        name="slykurl"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">.slyk.io</InputAdornment>
          ),
        }}
      />
      <SubmitButton label="Join waiting list" />
    </>
  );
};

export default SignUpForm;
