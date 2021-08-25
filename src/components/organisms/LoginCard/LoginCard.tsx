import * as React from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';

import { useLoginCardStyle } from './LoginCard.style';

const LoginCard: React.FC = () => {
  const classes = useLoginCardStyle();

  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.paper}>
        <CardContent>
          <Typography component="h1" variant="h3" className={classes.title}>
            Sign in
          </Typography>
          <Typography
            component="h2"
            variant="subtitle2"
            className={classes.subTitle}
          >
            Continue to your Freemance profile
          </Typography>
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
            <Button
              className={classes.submit}
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
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
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginCard;
