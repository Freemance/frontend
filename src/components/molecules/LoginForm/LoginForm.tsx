import React from 'react';
import { Grid, Link, TextField } from '@material-ui/core';

import SubmitButton from '@components/atoms/SubmitButton';
import { useLoginFormStyle } from './LoginForm.style';

const LoginForm = () => {
const classes = useLoginFormStyle();

  return (
    <form className={classes.form} noValidate>
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
        autoFocus
      />
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
        autoComplete="current-password"
      />
      <SubmitButton label="Sign In" />
      <Grid container spacing={4}>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
