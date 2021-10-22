import { Grid } from '@material-ui/core';
import * as React from 'react';

// Custom components
import CardLand from '@components/molecules/CardLand';
import TitleSection from '@components/atoms/TitleSection';
import DescriptionSection from '@components/atoms/DescriptionSection';
import { useCardLandContainer } from './CardLandContainer.style';

// i18n
import { useTranslation } from 'react-i18next';
const CardLandContainer = () => {
  const [t] = useTranslation('landpage');
  const classes = useCardLandContainer();
  return (
    <section>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        className={classes.root}
        spacing={2}
      >
        <Grid item xs={12}>
          <TitleSection text={t('applayout.titlesection1')} />
          <DescriptionSection text={t('applayout.descsection1')} />
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
          <CardLand
            image="/static/images/qvapay.svg"
            title={t('cardcont.2title')}
            text={t('cardcont.2text')}
          />
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
          <CardLand
            image="/static/images/slyklogodark.svg"
            title={t('cardcont.1title')}
            text={t('cardcont.1text')}
          />
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
          <CardLand
            image="/static/images/profile-search.min.svg"
            title={t('cardcont.3title')}
            text={t('cardcont.3text')}
          />
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
          <CardLand
            image="/static/images/payment.min.svg"
            title={t('cardcont.4title')}
            text={t('cardcont.4text')}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default CardLandContainer;
