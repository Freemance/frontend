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
          title="Hire and pay with Slyk"
          backgroundColor="#3e97f0"
          text="Get ready to sell your skills to different contractors using Slyk"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Portfolio />}
          title="Work from home"
          backgroundColor="#ea5455"
          text="Work from home, or strict time limitations, totally remote"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Visibility />}
          title="Take more visibility"
          backgroundColor="#a48bff"
          text="Get more visibility in the job market, have contractors discover your profile"
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Contact />}
          title="Contact with your clients"
          backgroundColor="#FFF"
          text="FOR NOW, the client can contact you through the email you provide when setting up your profile"
        />
      </Grid>
    </Grid>
  );
};

export default CardLandContainer;
