import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useFormCardStyle } from './FormCard.style';
import { IFormCard } from './types';

const FormCard = ({ title, subtitle, children }: IFormCard) => {
  const classes = useFormCardStyle();

  return (
    <Card className={classes.paper}>
      <CardContent>
        <Typography component="h1" variant="h3" className={classes.title}>
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
