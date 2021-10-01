import * as React from 'react';
import clsx from 'clsx';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
// Style
import { useHeroStyle } from './Hero.style';
import { useTranslation } from 'react-i18next';
import { getToken } from '../../../services/token/index';
const Hero = () => {
  const [t] = useTranslation('landpage');
  const token = getToken('access-token');
  const classes = useHeroStyle();
  return (
    <section className={classes.hero}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} lg={5}>
          <Typography variant="h3" component="h1" className={classes.ntitle}>
            {t('hero.ntitle')}
          </Typography>
          <Hidden xsDown>
            <Typography
              variant="h6"
              component="h3"
              className={classes.ndescription}
            >
              {t('hero.nsubtitle')}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography
              variant="subtitle2"
              component="h3"
              className={classes.ndescription}
            >
              {t('hero.nsubtitlemobile')}
            </Typography>
          </Hidden>

          <div className={classes.heroCallToAction}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              href="/directory"
              className={clsx(classes.btn, classes.solid)}
            >
              {t('hero.buttonofhire')}
            </Button>
            {token ? (
              <div></div>
            ) : (
              <Button
                color="primary"
                variant="outlined"
                size="large"
                className={clsx(classes.outline, classes.btn)}
                href="/signup"
              >
                {t('hero.buttonofbecome')}
              </Button>
            )}
          </div>
        </Grid>
        <Grid item xs={12} lg={7} md={12} xl={8} sm={12}>
          <img src="/mockup.svg" className={classes.mockup} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
