import React from 'react';
import { Button } from '@material-ui/core';

import { useSubmitButtonStyle } from './SubmitButton.style';
import ISubmitButton from './types';
import { CircularProgress } from '@material-ui/core';

const SubmitButton = ({ label, isLoading }: ISubmitButton) => {
  const classes = useSubmitButtonStyle();

  return (
    <Button
      type="submit"
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      disabled={isLoading}
    >
      {label}
      {isLoading && <CircularProgress className={classes.spinner} size={20} />}
    </Button>
  );
};

export default SubmitButton;
