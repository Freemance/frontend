import * as React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { useCardLandStyles } from './CardLand.style';
import ICard from './types';
import clsx from 'clsx';

const CardLand = ({ image, title, text }: ICard) => {
  const classes = useCardLandStyles();
  return (
    <Card className={classes.paper}>
      <CardContent>
        <Avatar
          variant="square"
          className={clsx(classes.icono, 'icono')}
          src={image}
        />
        <Typography
          variant="h5"
          className={clsx(classes.titlecard, 'titlecard')}
          component="h3"
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
