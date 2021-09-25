import React from 'react';
import { Typography, Card, CardContent, Container } from '@material-ui/core';
import Link from 'next/link';
import TemplateSkill from 'src/components/atoms/Icons/TemplateSkill';
// Types
import IFMCardItem from './types';
import { lightPalette } from 'src/styles/theme/palettes';
import { useFMCardItem } from './FMCardItem.style';
const FMCardItem = ({ name, skills, avatar, job, identifier }: IFMCardItem) => {
  const classes = useFMCardItem();
  return (
    <Container maxWidth="lg">
      <Link href={`/profile/${identifier}`}>
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
    </Container>
  );
};

export default FMCardItem;
