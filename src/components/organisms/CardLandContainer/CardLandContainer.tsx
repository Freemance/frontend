import { Grid } from '@material-ui/core';
import * as React from 'react';
import CardLand from '@components/molecules/CardLand';
import { useCardLandContainer } from './CardLandContainer.style';
// Icons for Cards
import Pay from '@components/atoms/Icons/Pay';
import Contact from '@components/atoms/Icons/Contact';
import Portfolio from '@components/atoms/Icons/Portfolio';
import Visibility from '@components/atoms/Icons/Visibility';

const CardLandContainer = () => {
  const classes = useCardLandContainer();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      className={classes.root}
      spacing={2}
    >
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Pay />}
          text="Hire and pay with Slyk"
          backgroundColor="#3e97f0"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand image={<Portfolio />} text="Work from home" />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Visibility />}
          text="Take more visibility"
          backgroundColor="#a48bff"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Contact />}
          text="Contact with your clients"
          backgroundColor="#FFF"
        />
      </Grid>
    </Grid>
  );
};

export default CardLandContainer;
