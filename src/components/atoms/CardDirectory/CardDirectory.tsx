import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
} from '@material-ui/core';
import Link from 'next/link';
import { useCardDirectoryStyle } from './CardDirectory.style';
import TemplateSkill from '../Icons/TemplateSkill';
import { lightPalette } from 'src/styles/theme/palettes';
const CardDirectory = ({ freelancers }: any) => {
  const classes = useCardDirectoryStyle();
  return (
    <Container maxWidth="lg">
      <Grid container>
        {freelancers.map((freelancer: any) => (
          <Grid item xs={12} lg={3} sm={6} md={3} key={freelancer.node.id}>
            <Link href={`/profile/${freelancer.node.id}`}>
              <Card className={classes.root}>
                <CardContent>
                  <img
                    aria-label="recipe"
                    src={`${process.env.IMAGE_LINK}${freelancer.node.avatar}`}
                    className={classes.avatar}
                  />

                  <Typography variant="h4" className={classes.titlecard}>
                    {freelancer.node.firstName} {freelancer.node.lastName}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.titlecard}>
                    {freelancer.node.jobTitle}
                  </Typography>
                  <div className={classes.tags}>
                    {freelancer.node.skills.map((skill: any) => (
                      <TemplateSkill
                        key={skill.id}
                        icono={skill.icon}
                        filled={lightPalette.text.primary}
                      />
                    ))}
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
