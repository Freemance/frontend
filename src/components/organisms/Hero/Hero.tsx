import * as React from 'react';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
// Style
import { useHeroStyle } from './Hero.style';
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const [t] = useTranslation('landpage');
  const classes = useHeroStyle();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} lg={4}>
        <Typography variant="h6" className={classes.ndescription}>
          {t('hero.ndescription')}
        </Typography>
        <Typography variant="h3" className={classes.ntitle}>
          {t('hero.ntitle')}
        </Typography>
        <Hidden xsDown>
          <Typography variant="subtitle2">{t('hero.nsubtitle')}</Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="subtitle2">
            {t('hero.nsubtitlemobile')}
          </Typography>
        </Hidden>

        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{ marginTop: '20px' }}
        >
          {t('hero.buttonofhire')}
        </Button>
        <Button
          color="primary"
          variant="outlined"
          size="large"
          className={classes.outline}
          style={{ marginTop: '20px' }}
        >
          {t('hero.buttonofbecome')}
        </Button>
      </Grid>
      <Grid item xs={12} lg={8} md={12} xl={8} sm={12}>
        <img src="/mockup.svg" className={classes.mockup} />
      </Grid>
    </Grid>
  );
};

export default Hero;
