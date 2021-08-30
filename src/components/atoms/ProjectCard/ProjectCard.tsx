import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

import { useProjectCardStyle } from './ProjectCard.style';
import IProjectCard from './types';

const ProjectCard = ({ title, imageUrl }: IProjectCard) => {
  const classes = useProjectCardStyle();

  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <Image width={200} height={180} layout="responsive" src={imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
