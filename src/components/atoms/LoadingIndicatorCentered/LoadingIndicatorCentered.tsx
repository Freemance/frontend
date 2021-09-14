import React from 'react';
import { CircularProgress, Container } from '@material-ui/core';

import { useLoadingIndicatorCenteredStyle } from './LoadingIndicatorCentered.style';

const LoadingIndicatorCentered = () => {
  const classes = useLoadingIndicatorCenteredStyle();

  return (
    <Container>
      <CircularProgress
        className={classes.progress}
        color="primary"
        size={30}
      />
    </Container>
  );
};

export default LoadingIndicatorCentered;
