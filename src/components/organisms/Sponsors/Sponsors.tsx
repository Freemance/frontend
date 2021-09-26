import React from 'react';
import { Grid } from '@material-ui/core';
import Qvapay from 'src/components/atoms/Icons/Qvapay';
import BitRemesas from '@components/atoms/Icons/BitRemesas';
import Slyk from '@components/atoms/Icons/Slyk';

const Sponsors = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={4}
      style={{ marginTop: '20px' }}
    >
      <Grid item xs={12} lg={3} sm={6}>
        <Qvapay />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <BitRemesas />
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        sm={6}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Slyk />
      </Grid>
    </Grid>
  );
};

export default Sponsors;
