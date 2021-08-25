import * as React from 'react';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
// Style
import { useHeroStyle } from './Hero.style';
const Hero = () => {
  const classes = useHeroStyle();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} lg={4}>
        <Typography variant="h6" className={classes.ndescription}>
          hire professionals now
        </Typography>
        <Typography variant="h3" className={classes.ntitle}>
          Hire Excellent Cuban Freelancers Services For Your Business.
        </Typography>
        <Hidden xsDown>
          <Typography variant="subtitle2">
            Freemance is an online platform where you can see the profile of
            professionals from different fields, connected with Slyk this allows
            hiring
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="subtitle2">
            Hire professionals now for your business in the Fremance directory
          </Typography>
        </Hidden>

        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{ marginTop: '20px' }}
        >
          Hire Freemancer
        </Button>
        <Button
          color="primary"
          variant="outlined"
          size="large"
          className={classes.outline}
          style={{ marginTop: '20px', marginLeft: '10px' }}
        >
          Become Freemancer
        </Button>
      </Grid>
      <Grid item xs={12} lg={8}></Grid>
    </Grid>
  );
};

export default Hero;
