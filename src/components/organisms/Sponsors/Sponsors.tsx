import React from 'react';
import { Grid } from '@material-ui/core';
import Qvapay from 'src/components/atoms/Icons/Qvapay';
import BitRemesas from '@components/atoms/Icons/BitRemesas';
import Slyk from '@components/atoms/Icons/Slyk';
import { useSponsorsStyle } from './Sponsors.style';
import Kwelta from '@components/atoms/Icons/Kwelta';

const Sponsors = () => {
  const classes = useSponsorsStyle();
  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={4}>
      <Grid item xs={12} lg={3} sm={6} className={classes.qvapay}>
        <Qvapay />
      </Grid>
      <Grid item xs={12} lg={3} sm={6} className={classes.bitremesas}>
        <BitRemesas />
      </Grid>
      <Grid item xs={12} lg={3} sm={6} className={classes.slyk}>
        <Slyk />
      </Grid>
      <Grid item xs={12} lg={3} sm={6} className={classes.kwelta}>
        <Kwelta />
      </Grid>
    </Grid>
  );
};

export default Sponsors;
