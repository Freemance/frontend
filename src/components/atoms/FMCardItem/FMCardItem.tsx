import React from 'react';
import {
  Typography,
  Card,
  Avatar,
  CardContent,
  Chip,
  Container,
} from '@material-ui/core';
// Types
import IFMCardItem from './types';
import { useFMCardItem } from './FMCardItem.style';
const FMCardItem = ({ name, skills, avatar }: IFMCardItem) => {
  const classes = useFMCardItem();
  return (
    <Container maxWidth="lg">
      <Card className={classes.root}>
        <CardContent>
          {avatar ? (
            <Avatar
              aria-label="recipe"
              src={avatar}
              className={classes.avatar}
            />
          ) : (
            <Avatar aria-label="recipe" className={classes.avatar}>
              F
            </Avatar>
          )}

          <Typography variant="h5" className={classes.titlecard}>
            {name}
          </Typography>
          {skills.map((skill) => (
            <div key={skill} className={classes.tags}>
              <Chip
                label={<Typography variant="subtitle2">{skill}</Typography>}
                className={classes.tag}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default FMCardItem;
