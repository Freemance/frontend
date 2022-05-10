import React from 'react';
import { Grid } from '@material-ui/core';
import Image from 'next/image';

import { usePoweredStyles } from './PoweredBy.style';

export const PoweredBy = () => {
  const classes = usePoweredStyles();
  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={1}>
      <Grid item xs={12} lg={3} sm={6} className={classes.container}>
        <Image
          src="/static/images/mihavidao.png"
          width={500}
          height={100}
          objectFit="contain"
        />
      </Grid>
    </Grid>
  );
};
