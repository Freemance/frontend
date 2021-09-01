import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Chip,
  Container,
} from '@material-ui/core';
// Types
import IFMCardItem from './types';
import { useFMCardItem } from './FMCardItem.style';
const FMCardItem = ({ name, skills, avatar, job }: IFMCardItem) => {
  const classes = useFMCardItem();
  return (
    <Container maxWidth="lg">
      <Card className={classes.root}>
        <CardContent>
          {avatar ? (
            <img aria-label="recipe" src={avatar} className={classes.avatar} />
          ) : (
            <img className={classes.noavatar} src="/usernoexist.svg"></img>
          )}
          <Typography variant="h4" className={classes.titlecard}>
            {name}
          </Typography>
          {job ? (
            <Typography variant="subtitle2" className={classes.job}>
              {job}
            </Typography>
          ) : (
            <Typography variant="subtitle2" className={classes.job}>
              Dont position defined
            </Typography>
          )}
          <div className={classes.tagcontainer}>
            {skills.map((skill) => (
              <div key={skill} className={classes.tags}>
                <Chip
                  label={<Typography variant="body1">{skill}</Typography>}
                  className={classes.tag}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FMCardItem;
