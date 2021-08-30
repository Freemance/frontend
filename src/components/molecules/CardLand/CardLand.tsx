import * as React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { useCardLandStyles } from './CardLand.style';
import ICard from './types';
import clsx from 'clsx';

const CardLand = ({ image, title, text, backgroundColor }: ICard) => {
  const classes = useCardLandStyles();
  return (
    <Card className={classes.paper}>
      <CardContent>
        <Avatar
          className={clsx(classes.icono, 'icono')}
          style={{ background: `${backgroundColor}` }}
        >
          {image}
        </Avatar>
        <Typography
          variant="h5"
          className={clsx(classes.titlecard, 'titlecard')}
        >
          {title}
        </Typography>
        <Typography
          paragraph
          variant="subtitle2"
          className={clsx(classes.descriptioncard, 'descriptioncard')}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardLand;
