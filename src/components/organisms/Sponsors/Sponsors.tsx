import React from 'react';
import { Grid } from '@material-ui/core';
import Qvapay from 'src/components/atoms/Icons/Qvapay';
import BitRemesas from '@components/atoms/Icons/BitRemesas';
import Slyk from '@components/atoms/Icons/Slyk';
import { useSponsorsStyle } from './Sponsors.style';

const Sponsors = () => {
  const classes = useSponsorsStyle();
  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={4}>
      <Grid
        item
        xs={12}
        lg={3}
        sm={6}
        className={classes.container}
        style={{ marginBottom: '-20%' }}
      >
        <Qvapay />
      </Grid>
      <Grid item xs={12} lg={3} sm={6} className={classes.container}>
        <BitRemesas />
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        sm={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '6.8%',
          marginBottom: '10%',
        }}
      >
        <Slyk />
      </Grid>
    </Grid>
  );
};

export default Sponsors;
