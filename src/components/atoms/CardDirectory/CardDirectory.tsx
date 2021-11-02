import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import Link from 'next/link';
import { useCardDirectoryStyle } from './CardDirectory.style';
import TemplateSkill from '../Icons/TemplateSkill';
import { lightPalette } from 'src/styles/theme/palettes';
import Image from 'next/image';
const CardDirectory = ({ freelancers }: any) => {
  const classes = useCardDirectoryStyle();
  return (
    <Container maxWidth="lg">
      <Grid container>
        {freelancers.map((freelancer: any) => (
          <Grid item xs={12} lg={3} sm={6} md={3} key={freelancer.node.id}>
            <Link href={`/profile/${freelancer.node.user.username}`}>
              <Card className={classes.root}>
                <CardContent>
                  <div className={classes.avatarWrapp}>
                    <Image
                      aria-label="recipe"
                      className={classes.avatar}
                      src={`${process.env.IMAGE_LINK}600X600/${freelancer.node.avatar}`}
                      alt={'user avatar'}
                      width={184}
                      height={184}
                      layout="responsive"
                      quality={100}
                      priority
                    />
                  </div>
                  <Typography variant="h4" className={classes.titlecard}>
                    {freelancer.node.firstName} {freelancer.node.lastName}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.job}>
                    {freelancer.node.jobTitle}
                  </Typography>
                  <div className={classes.tags}>
                    {freelancer.node.skills.slice(0, 5).map((skill: any) => (
                      <Tooltip
                        title={skill.name || 'Hola'}
                        placement="top"
                        key={skill.id}
                      >
                        <IconButton
                          className={classes.tag}
                          color="inherit"
                          disableRipple={true}
                        >
                          <TemplateSkill
                            key={skill.id}
                            icono={skill.icon}
                            filled={lightPalette.text.primary}
                          />
                        </IconButton>
                      </Tooltip>
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
