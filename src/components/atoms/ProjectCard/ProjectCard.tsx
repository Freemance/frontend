import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import { useProjectCardStyle } from './ProjectCard.style';
import IProjectCard from './types';

const ProjectCard = ({ title, imageUrl }: IProjectCard) => {
  const classes = useProjectCardStyle();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} />
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
