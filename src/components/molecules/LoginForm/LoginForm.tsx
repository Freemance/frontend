import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Link, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SubmitButton from '@components/atoms/SubmitButton';
import { useLoginFormStyle } from './LoginForm.style';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'src/lib/apollo/auth';
import { IAuth, ILoginInput } from 'src/lib/apollo/auth/types';
import { ActionType, GlobalContext } from 'src/context';
import { saveToken } from 'src/services/token';

const LoginForm = () => {
  const classes = useLoginFormStyle();

  const router = useRouter();

  const [login, { error }] = useMutation<IAuth, ILoginInput>(LOGIN);

  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(GlobalContext);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Required'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Required'),
      })}
      onSubmit={(values) => {
        setIsLoading(true);
        login({
          variables: {
            email: values.email,
            password: values.password,
          },
        })
          .then(async (res) => {
            if (res.data) {
              saveToken('access-token', res.data.login.accessToken);
              saveToken('refresh-token', res.data.login.refreshToken);
              dispatch({
                type: ActionType.SetUser,
                payload: res.data.login.user,
              });
              await router.push({
                pathname: '/profile',
                query: { fromLogin: true },
              });
            }
          })
          .catch((err) => {
            setIsLoading(false);
          });
      }}
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
          {error && (
            <Alert className={classes.alert} severity="error">
              {error.message}
            </Alert>
          )}
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
          <div className={classes.submitButton}>
            <SubmitButton label="Sign In" isLoading={isLoading} />
          </div>
          <Grid container spacing={4}>
            <Grid item xs>
              <Link href="/reset/password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
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
