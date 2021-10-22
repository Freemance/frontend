import React from 'react';
import { Grid } from '@material-ui/core';

import PapiDAO from './../../atoms/Icons/PapiDAO';
export const PoweredBy = () => {
  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={4}>
      <Grid
        item
        xs={12}
        lg={3}
        sm={6}
        style={{ justifyContent: 'center', display: 'flex' }}
      >
        <PapiDAO />
      </Grid>
    </Grid>
  );
};
