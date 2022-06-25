import React from 'react';
import { Button, Grid, Link } from '@material-ui/core';
import clsx from 'clsx';

import { useSupportUsStyle } from './SupportUs.style';

const SupportUs = () => {
  const classes = useSupportUsStyle();
  return (
    <Grid container justifyContent="center" alignItems="stretch" spacing={4}>
      <Grid item xs={12} lg={3} sm={6} className={classes.supportBtn}>
        <Link
          href="https://www.producthunt.com/upcoming/freemance-2"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={clsx(classes.btn, classes.solid)}
          >
            ProductHunt
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SupportUs;
