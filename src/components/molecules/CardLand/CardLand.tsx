import * as React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { useCardLandStyles } from './CardLand.style';
import ICard from './types';
import clsx from 'clsx';

const CardLand = ({ image, text }: ICard) => {
  const classes = useCardLandStyles();
  return (
    <Card className={classes.paper}>
      <CardContent>
        <Avatar className={classes.imagen} src={image} />
        <Typography
          variant="h5"
          className={clsx(classes.titlecard, 'titlecard')}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardLand;
