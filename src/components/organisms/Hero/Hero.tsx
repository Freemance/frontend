import * as React from 'react';
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
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} lg={4}>
        <Typography variant="h3" className={classes.ntitle}>
          {t('hero.ntitle')}
        </Typography>
        <Hidden xsDown>
          <Typography variant="h6" className={classes.ndescription}>
            {t('hero.nsubtitle')}
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="subtitle2" className={classes.ndescription}>
            {t('hero.nsubtitlemobile')}
          </Typography>
        </Hidden>

        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{ marginTop: '20px' }}
          href="/directory"
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
            className={classes.outline}
            style={{ marginTop: '20px' }}
            href="/signup"
          >
            {t('hero.buttonofbecome')}
          </Button>
        )}
      </Grid>
      <Grid item xs={12} lg={8} md={12} xl={8} sm={12}>
        <img src="/mockup.png" className={classes.mockup} />
      </Grid>
    </Grid>
  );
};

export default Hero;
