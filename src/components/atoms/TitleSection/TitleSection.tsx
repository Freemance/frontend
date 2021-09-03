import * as React from 'react';
import ITitleSection from './types';
import { Typography } from '@material-ui/core';
import { useTitleSectionStyles } from './TitleSection.style';

const TitleSection = ({ text }: ITitleSection) => {
  const classes = useTitleSectionStyles();
  return (
    <div className={classes.patitle}>
      <Typography variant="h3" className={classes.title}>
        {text}
      </Typography>
    </div>
  );
};

export default TitleSection;
