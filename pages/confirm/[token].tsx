import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography } from '@material-ui/core';
import Success from '@components/atoms/Icons/Success';
import Error from '@components/atoms/Icons/Error';
// import useTokenStyles from './token.style';
// Apollo
import { useMutation } from '@apollo/client';
import { ACTIVATE_USER } from 'src/lib/apollo/auth/mutations';

function Token() {
  // const classes = useTokenStyles();
  const router = useRouter();
  const { token } = router.query;
  const [active, setActive] = useState(false);
  const [activateuser, { data, error }] = useMutation(ACTIVATE_USER, {
    errorPolicy: 'all',
  });
  activateuser({
    variables: {
      tokenconf: `${token}`,
    },
  });
  useEffect(() => {
    if (data) {
      console.log(data);
      setActive(true);
      console.log(active);
    }
  }, [data]);
  error ? console.log(error) : <h1></h1>;
  active ? console.log(active) : console.log('No active');
  return (
    <Container maxWidth="sm">
      {active ? (
        // <div className={classes.info}>
        <>
          <Success width="40px" height="40px" />
          <Typography variant="h3">
            Your account has been activated successfully
          </Typography>
        </>
      ) : (
        // </div>
        // <div className={classes.info}>
        <>
          <Error width="40px" height="40px" />
          <Typography variant="h3">
            Your account has not been activated correctly
          </Typography>
        </>
        // </div>
      )}
    </Container>
  );
}

export default Token;
