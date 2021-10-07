import * as React from 'react';
import clsx from 'clsx';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
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
        <Grid item xs={12} lg={5} xl={4}>
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
            <Link href="/directory">
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={clsx(classes.btn, classes.solid)}
              >
                {t('hero.buttonofhire')}
              </Button>
            </Link>

            {token ? (
              <div></div>
            ) : (
              <Link href="/signup">
                <Button
                  color="primary"
                  variant="outlined"
                  size="large"
                  className={clsx(classes.outline, classes.btn)}
                >
                  {t('hero.buttonofbecome')}
                </Button>
              </Link>
            )}
          </div>
        </Grid>
        <Grid item xs={12} lg={7} md={12} xl={8} sm={12}>
          <Image
            src="/mockup.webp"
            alt="Hero poster"
            width={877}
            height={585}
            layout="responsive"
            quality={100}
            priority
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
