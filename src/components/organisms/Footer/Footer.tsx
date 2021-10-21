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
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} lg={4} md={4} xl={4} sm={4}>
          <Link href="/directory">
            <Typography variant="caption" className={classes.link}>
              Directory
            </Typography>
          </Link>
          <Link href="/">
            <Typography variant="caption" className={classes.link}>
              Contact Us
            </Typography>
          </Link>
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
            href="https://twitter.com/freemanceslyk"
          >
            <Twitter />
          </IconButton>
          <IconButton
            className={classes.button}
            component={ExtLink}
            target="__black"
            href="https://facebook.com/slyk_cu"
          >
            <Facebook />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
