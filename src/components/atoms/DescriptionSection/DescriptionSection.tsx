import { Typography, Container } from '@material-ui/core';
import * as React from 'react';
import IDescriptionSection from './types';
import { useDescriptionStyles } from './DescriptionSection.style';

const DescriptionSection = ({ text }: IDescriptionSection) => {
  const classes = useDescriptionStyles();
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="subtitle1" className={classes.descriptionsection}>
          {text}
        </Typography>
      </Container>
    </>
  );
};

export default DescriptionSection;
