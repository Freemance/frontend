import React from 'react';
import { Grid, Link, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SubmitButton from '@components/atoms/SubmitButton';
import { useLoginFormStyle } from './LoginForm.style';

const LoginForm = () => {
  const classes = useLoginFormStyle();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {}}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            color="primary"
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={values.email}
            onChange={(e) => {
              handleChange(e);
            }}
            error={touched.email && Boolean(errors.email)}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
          />
          <TextField
            color="primary"
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={(e) => {
              handleChange(e);
            }}
            error={touched.password && Boolean(errors.password)}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
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
      )}
    </Formik>
  );
};

export default LoginForm;
