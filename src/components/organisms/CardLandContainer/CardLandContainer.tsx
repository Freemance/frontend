import { Grid } from '@material-ui/core';
import * as React from 'react';
import CardLand from '@components/molecules/CardLand';
import { useCardLandContainer } from './CardLandContainer.style';
// Icons for Cards
import BusinessIcon from '@material-ui/icons/Business';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

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
        <CardLand image={<BusinessIcon />} text="Hire and pay with Slyk" />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand image={<HomeWorkIcon />} text="Work from home" />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand image={<VisibilityIcon />} text="Take more visibility" />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<ContactPhoneIcon />}
          text="Contact with your clients"
        />
      </Grid>
    </Grid>
  );
};

export default CardLandContainer;
