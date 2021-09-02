import React from 'react';
import { Chip } from '@material-ui/core';

import { useProfileSkillsStyle } from './ProfileSkills.style';
import IProfileSkills from './types';

const ProfileSkills = ({ skills }: IProfileSkills) => {
  const classes = useProfileSkillsStyle();

  return (
    <div className={classes.root}>
      {skills.map((skill, index) => (
        <Chip key={index} className={classes.chip} label={skill.name} />
      ))}
    </div>
  );
};

export default ProfileSkills;
