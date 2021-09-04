import React, { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
} from '@material-ui/core';
import Link from 'next/link';
import { useCardDirectoryStyle } from './CardDirectory.style';
const CardDirectory = ({ freelancers }) => {
  const classes = useCardDirectoryStyle();
  return (
    <Container maxWidth="lg">
      <Grid container>
        {freelancers.map((freelancer) => (
          <Grid item xs={12} lg={3} sm={6} md={3} key={freelancer.node.id}>
            <Link href={`/profile/${freelancer.node.id}`}>
              <Card className={classes.root}>
                <CardContent>
                  <img
                    aria-label="recipe"
                    src="https://avatars.githubusercontent.com/u/65286318?v=4"
                    className={classes.avatar}
                  />
                  <Typography variant="h4" className={classes.titlecard}>
                    {freelancer.node.slykUser}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.titlecard}>
                    Job
                  </Typography>
                  <div className={classes.tags}>
                    <Chip
                      label={<Typography variant="body1">Skills</Typography>}
                      className={classes.tag}
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardDirectory;
