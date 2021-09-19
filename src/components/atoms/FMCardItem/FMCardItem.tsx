import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Chip,
  Container,
} from '@material-ui/core';
import Link from 'next/link';
// Types
import IFMCardItem from './types';
import { useFMCardItem } from './FMCardItem.style';
const FMCardItem = ({ name, skills, avatar, job, user }: IFMCardItem) => {
  const classes = useFMCardItem();
  return (
    <Container maxWidth="lg">
      <Link href={`/profiles/${user}`}>
        <Card className={classes.root}>
          <CardContent>
            {avatar ? (
              <img
                aria-label="recipe"
                src={avatar}
                className={classes.avatar}
              />
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
              {skills &&
                skills.map((skill: any) => (
                  <Chip
                    key={skill.id}
                    label={skill.name}
                    className={classes.tag}
                  />
                ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </Container>
  );
};

export default FMCardItem;
