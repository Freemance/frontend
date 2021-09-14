import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useFormCardStyle } from './FormCard.style';
import { IFormCard } from './types';
import ArrowDown from '@components/atoms/Icons/ArrowDown';
import { IconButton } from '@material-ui/core';
import Link from 'next/link';

const FormCard = ({ title, subtitle, children }: IFormCard) => {
  const classes = useFormCardStyle();

  return (
    <Card className={classes.paper}>
      <CardContent>
        <Typography component="h1" variant="h3" className={classes.title}>
          <Link href="/">
            <IconButton>
              <ArrowDown />
            </IconButton>
          </Link>

          {title}
        </Typography>
        <Typography
          component="h2"
          variant="subtitle2"
          className={classes.subTitle}
        >
          {subtitle}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default FormCard;
