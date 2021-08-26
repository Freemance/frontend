import React from 'react';
import { Button } from '@material-ui/core';

import { useSubmitButtonStyle } from './SubmitButton.style';
import ISubmitButton from './types';

const SubmitButton = ({ label }: ISubmitButton) => {
  const classes = useSubmitButtonStyle();

  return (
    <Button
      className={classes.submit}
      type="submit"
      fullWidth
      size="large"
      variant="contained"
      color="primary"
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
