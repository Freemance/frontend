import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CircularProgress, Container } from '@material-ui/core';
import Success from '@components/atoms/Icons/Success';
import Error from '@components/atoms/Icons/Error';
import { ConfirmMessage } from '@components/atoms/ConfirmMessage/ConfirmMessage';
// Apollo
import { useMutation } from '@apollo/client';
import { ACTIVATE_USER } from 'src/lib/apollo/auth/mutations';

function Token() {
  const router = useRouter();
  const { token } = router.query;
  const [activateuser, { data, loading, error }] = useMutation(ACTIVATE_USER, {
    errorPolicy: 'all',
  });
  useEffect(() => {
    token
      ? activateuser({
          variables: {
            token: `${token}`,
          },
        })
      : console.log('No hay token');
  }, [token]);
  error && console.log(error);
  return (
    <Container maxWidth="sm">
      {error ? (
        <ConfirmMessage
          text="Your account has not been activated correctly"
          icon={<Error width="40px" height="40px" />}
        />
      ) : loading ? (
        <ConfirmMessage icon={<CircularProgress />} />
      ) : (
        data && (
          <ConfirmMessage
            text="Your account has been activated successfully"
            icon={<Success width="40px" height="40px" />}
          />
        )
      )}
    </Container>
  );
}

export default Token;
