import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Container,
  Tooltip,
  IconButton,
} from '@material-ui/core';
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
      <Card className={classes.root}>
        <CardContent>
          <Link href={`/profile/${identifier}`}>
            <>
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
            </>
          </Link>
          <div className={classes.tagcontainer}>
            {skills &&
              skills.slice(0, 5).map((skill: any) => (
                <Tooltip
                  title={skill.name || 'Hola'}
                  placement="top"
                  key={skill.id}
                >
                  <IconButton
                    className={classes.tag}
                    color="inherit"
                    href={`https://www.google.com/search?q=${skill.name}`}
                    disableRipple={true}
                  >
                    <TemplateSkill
                      icono={skill.icon}
                      filled={lightPalette.text.primary}
                    />
                  </IconButton>
                </Tooltip>
              ))}
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FMCardItem;
