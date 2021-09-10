import { Grid } from '@material-ui/core';
import * as React from 'react';
import CardLand from '@components/molecules/CardLand';
import { useCardLandContainer } from './CardLandContainer.style';
// Icons for Cards
import Pay from '@components/atoms/Icons/Pay';
import Contact from '@components/atoms/Icons/Contact';
import Portfolio from '@components/atoms/Icons/Portfolio';
import Visibility from '@components/atoms/Icons/Visibility';
// i18n
import { useTranslation } from 'react-i18next';
const CardLandContainer = () => {
  const [t] = useTranslation('landpage');
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
          title={t('cardcont.1title')}
          backgroundColor="#3e97f0"
          text={t('cardcont.1text')}
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Portfolio />}
          title={t('cardcont.2title')}
          backgroundColor="#ea5455"
          text={t('cardcont.2text')}
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Visibility />}
          title={t('cardcont.3title')}
          backgroundColor="#a48bff"
          text={t('cardcont.3text')}
        />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <CardLand
          image={<Contact />}
          title={t('cardcont.4title')}
          backgroundColor="#ffc145"
          text={t('cardcont.4text')}
        />
      </Grid>
    </Grid>
  );
};

export default CardLandContainer;
