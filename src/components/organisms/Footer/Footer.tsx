import * as React from 'react';
import { useFooterStyle } from './Footer.style';
import { Grid, Typography } from '@material-ui/core';
import Twitter from '@components/atoms/Icons/Twitter';
import Facebook from '@components/atoms/Icons/Facebook';
import Link from 'next/link';
import { Link as ExtLink } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

const Footer = () => {
  const classes = useFooterStyle();
  return (
    <div className={classes.box}>
      <Grid container spacing={4} className={classes.container}>
        <Grid item xs={12} lg={4} md={4} xl={4} sm={4}>
          <Link href="/directory">
            <Typography variant="caption" className={classes.link}>
              Directory
            </Typography>
          </Link>
          <ExtLink
            href="mailto:support@freemance.com"
            target="_blank"
            variant="caption"
            style={{ textDecoration: 'none' }}
          >
            <Typography variant="caption" className={classes.link}>
              Contact Us
            </Typography>
          </ExtLink>
        </Grid>
        <Grid item xs={12} lg={4} md={4} xl={4} sm={4}>
          <Link href="/faq">
            <Typography variant="caption" className={classes.link}>
              FAQ
            </Typography>
          </Link>
          <Link href="/privacy_policy">
            <Typography variant="caption" className={classes.link}>
              Privacy Policy
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} lg={4} md={4} xl={4} sm={4}>
          <IconButton
            className={classes.button}
            component={ExtLink}
            target="__black"
            href="https://twitter.com/FreemanceSlyk"
          >
            <Twitter />
          </IconButton>
          <IconButton
            className={classes.button}
            component={ExtLink}
            target="__black"
            href="https://www.facebook.com/FreemanceSlyk/"
          >
            <Facebook />
          </IconButton>
        </Grid>
        <Grid item xs={12} lg={12} md={12} xl={12} sm={12}>
          <Typography
            variant="caption"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-20px',
            }}
          >
            © Freemance DAO LLC, 2022
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
