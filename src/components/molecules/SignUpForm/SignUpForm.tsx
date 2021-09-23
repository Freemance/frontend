import {
  Button,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
  InputAdornment,
} from '@material-ui/core';

import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { useSignUpFormStyle } from './SignUpForm.style';
import { TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import * as Yup from 'yup';
// Apollo
import { useMutation } from '@apollo/client';
import { REGISTER } from 'src/lib/apollo/auth';
const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));
export default function SignUpForm() {
  const [register, { data, error }] = useMutation(REGISTER);
  return (
    <FormikStepper
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        slykUrl: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await sleep(800);
        register({
          variables: {
            email: values.email,
            password: values.password,
            slykUrl: `${values.slykUrl}.slyk.io`,
            username: values.slykUrl,
            firstName: values.firstName,
            lastName: values.lastName,
          },
        })
          .then(async (res) => {})
          .catch((err) => {});
      }}
    >
      <FormikStep
        label="Personal Data"
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('Required')
            .matches(
              /^[aA-zZ\s]+$/,
              'Only alphabets are allowed for this field '
            ),
          lastName: Yup.string()
            .required('Required')
            .matches(
              /^[aA-zZ\s]+$/,
              'Only alphabets are allowed for this field '
            ),
          email: Yup.string().email('Enter a valid email').required('Required'),
        })}
      >
        <Field
          color="primary"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="firstName"
          component={TextField}
          label="First Name"
        />
        <Field
          color="primary"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="lastName"
          component={TextField}
          label="Last Name"
        />
        <Field
          color="primary"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="email"
          component={TextField}
          label="Email"
          type="email"
        />
      </FormikStep>
      <FormikStep
        label="Slyk"
        validationSchema={Yup.object().shape({
          slykUrl: Yup.string()
            .matches(/^\b[a-zA-Z_]+\b$/, 'Dont use numbers or white space')
            .required('Required'),
        })}
      >
        <Field
          color="primary"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="slykUrl"
          component={TextField}
          label="Slyk Url"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">.slyk.io</InputAdornment>
            ),
          }}
        />
      </FormikStep>
      <FormikStep
        label="Security"
        validationSchema={Yup.object().shape({
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match")
            .required('Confirm Password is required'),
        })}
      >
        {error && <Alert severity="error">{error.message}</Alert>}
        {data && (
          <Alert severity="success">
            USER CREATED, please check your email, also check your spam tray in
            case the email goes there
          </Alert>
        )}
        <Field
          color="primary"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="password"
          component={TextField}
          label="Password"
          type="password"
        />
        <Field
          color="primary"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="confirmPassword"
          component={TextField}
          label="Password Confirm"
          type="password"
        />
      </FormikStep>
    </FormikStepper>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  const classes = useSignUpFormStyle();
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classes.form} noValidate>
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="primary"
              >
                {isSubmitting
                  ? 'Joining'
                  : isLastStep()
                  ? 'Join waiting list'
                  : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
