import { Typography, Container } from '@material-ui/core';
import * as React from 'react';
import IDescriptionSection from './types';
import { useDescriptionStyles } from './DescriptionSection.style';

const DescriptionSection = ({ text }: IDescriptionSection) => {
  const classes = useDescriptionStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          variant="subtitle1"
          component="h3"
          className={classes.descriptionsection}
        >
          {text}
        </Typography>
      </Container>
    </>
  );
};

export default DescriptionSection;
