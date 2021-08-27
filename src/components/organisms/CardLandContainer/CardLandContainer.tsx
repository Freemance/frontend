import { Grid } from '@material-ui/core';
import * as React from 'react';
import CardLand from '@components/molecules/CardLand';
import { useCardLandContainer } from './CardLandContainer.style';

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
          image="https://avatars.githubusercontent.com/u/65286318?v=4"
          text="Hire and pay with Slyk"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image="https://avatars.githubusercontent.com/u/65286318?v=4"
          text="Hire and pay with Slyk"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image="https://avatars.githubusercontent.com/u/65286318?v=4"
          text="Hire and pay with Slyk"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image="https://avatars.githubusercontent.com/u/65286318?v=4"
          text="Hire and pay with Slyk"
        />
      </Grid>
    </Grid>
  );
};

export default CardLandContainer;
