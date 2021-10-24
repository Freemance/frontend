import React from 'react';
import { Grid } from '@material-ui/core';
import { usePoweredStyles } from './PoweredBy.style';

import PapiDAO from './../../atoms/Icons/PapiDAO';
export const PoweredBy = () => {
  const classes = usePoweredStyles();
  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={1}>
      <Grid item xs={12} lg={3} sm={6} className={classes.container}>
        <PapiDAO />
      </Grid>
    </Grid>
  );
};
