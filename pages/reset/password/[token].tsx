import React from 'react';
import { useRouter } from 'next/router';
import {
  CircularProgress,
  Container,
  TextField,
  Typography,
  Link,
  IconButton,
} from '@material-ui/core';
import ArrowDown from '@components/atoms/Icons/ArrowDown';
import Success from '@components/atoms/Icons/Success';
import Error from '@components/atoms/Icons/Error';
import { ConfirmMessage } from '@components/atoms/ConfirmMessage/ConfirmMessage';
import SubmitButton from '@components/atoms/SubmitButton';
// Apollo
import { useMutation } from '@apollo/client';
import { NEW_PASSWORD } from 'src/lib/apollo/auth/mutations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import NavBar from '@components/organisms/NavBar';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));
function Token() {
  const router = useRouter();
  const { token } = router.query;
  const [newpassword, { data, loading, error }] = useMutation(NEW_PASSWORD, {
    errorPolicy: 'all',
  });
  data && console.log(data);
  error && console.log(error);
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
      </Container>
      <Container maxWidth="sm">
        {error ? (
          <ConfirmMessage
            text="Error updating password"
            icon={<Error width="40px" height="40px" />}
          />
        ) : loading ? (
          <ConfirmMessage icon={<CircularProgress />} />
        ) : data ? (
          <ConfirmMessage
            text="Password updated correctly"
            icon={<Success width="40px" height="40px" />}
          />
        ) : (
          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={Yup.object().shape({
              password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .max(20, 'Password must be at max 20 characters')
                .required('Required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords don't match")
                .required('Confirm Password is required'),
            })}
            onSubmit={async (values) => {
              await sleep(800);
              newpassword({
                variables: {
                  password: values.password,
                  token: `${token}`,
                },
              })
                .then(async (res) => {})
                .catch((err) => {});
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
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ marginTop: '20%' }}
              >
                <Typography variant="h3">
                  <Link href="/">
                    <IconButton>
                      <ArrowDown />
                    </IconButton>
                  </Link>
                  Insert New Password
                </Typography>
                <TextField
                  color="primary"
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  size="small"
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
                <TextField
                  color="primary"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Password"
                  type="password"
                  value={values.confirmPassword}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  onBlur={handleBlur}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  style={{ marginBottom: '5%' }}
                />
                <SubmitButton label="Send Email" isLoading={loading} />
              </form>
            )}
          </Formik>
        )}
      </Container>
    </>
  );
}

export default Token;
