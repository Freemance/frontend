import React from 'react';
import { Chip } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import { useProfileSkillsStyle } from './ProfileSkills.style';
import IProfileSkills from './types';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileSkills = ({ skills }: IProfileSkills) => {
  const classes = useProfileSkillsStyle();

  const { isEdit } = useProfileContext();

  return (
    <div className={classes.root}>
      {isEdit && (
        <Chip icon={<AddIcon />} label="Add skill" onClick={() => {}} />
      )}
      {skills.map((skill, index) =>
        isEdit ? (
          <Chip
            key={index}
            color="primary"
            label={skill.name}
            variant="outlined"
            onClick={() => {}}
            onDelete={() => {}}
          />
        ) : (
          <Chip key={index} className={classes.chip} label={skill.name} />
        )
      )}
    </div>
  );
};

export default ProfileSkills;
