import {
  TextField,
  Container,
  Typography,
  IconButton,
} from '@material-ui/core';
import Link from 'next/link';
import { Alert } from '@material-ui/lab';
import ArrowDown from '@components/atoms/Icons/ArrowDown';
import React from 'react';
import { usePasswordRecStyles } from './PasswordRec.style';
import SubmitButton from '@components/atoms/SubmitButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RESET_PASSWORD } from 'src/lib/apollo/auth/mutations';
import { useMutation } from '@apollo/client';
import NavBar from '@components/organisms/NavBar';
const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));
function PasswordRec() {
  const classes = usePasswordRecStyles();
  const [resetpassword, { data, error, loading }] = useMutation(RESET_PASSWORD);
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
      </Container>

      <Container maxWidth="xs">
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Enter a valid email')
              .required('Required'),
          })}
          onSubmit={async (values) => {
            await sleep(800);
            resetpassword({
              variables: {
                email: values.email,
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
              className={classes.container}
            >
              <Typography variant="h3">
                <Link href="/">
                  <IconButton>
                    <ArrowDown />
                  </IconButton>
                </Link>
                Reset Password
              </Typography>
              {error && (
                <Alert className={classes.alert} severity="error">
                  {error.message}
                </Alert>
              )}
              {data && (
                <Alert className={classes.alert} severity="success">
                  Email for reset password has been send successfully, please
                  check your inbox
                </Alert>
              )}
              <TextField
                color="primary"
                margin="normal"
                variant="outlined"
                required
                fullWidth
                size="small"
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
              <div className={classes.submitButton}>
                <SubmitButton label="Send Email" isLoading={loading} />
              </div>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default PasswordRec;
