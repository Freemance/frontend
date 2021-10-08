import React from 'react';
import { Typography, Card, CardContent, Container } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';

import TemplateSkill from 'src/components/atoms/Icons/TemplateSkill';
// Types
import IFMCardItem, { ILoader } from './types';
import { lightPalette } from 'src/styles/theme/palettes';
import { useFMCardItem } from './FMCardItem.style';
const FMCardItem = ({ name, skills, avatar, job, identifier }: IFMCardItem) => {
  const classes = useFMCardItem();

  const myLoader = ({ src, width, quality }: ILoader) => {
    return `${process.env.IMAGE_LINK}600X600/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <Container maxWidth="lg">
      <Link href={`/profile/${identifier}`}>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.avatarWrapp}>
              {avatar ? (
                <Image
                  aria-label="recipe"
                  className={classes.avatar}
                  loader={myLoader}
                  src={avatar}
                  alt={name || 'user avatar'}
                  width={232}
                  height={232}
                  layout="responsive"
                  quality={100}
                  priority
                />
              ) : (
                <Image
                  aria-label="recipe"
                  className={classes.avatar}
                  src="/usernoexist.svg"
                  alt="No user"
                  width={232}
                  height={232}
                  layout="responsive"
                  quality={100}
                  priority
                />
              )}
            </div>
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
