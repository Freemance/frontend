import React from 'react';
import { Divider, Tab, Tabs } from '@material-ui/core';

import { useProfileBodyStyle } from './ProfileBody.style';

const ProfileBody = () => {
  const classes = useProfileBodyStyle();

  return (
    <div className={classes.contain}>
      <Divider />
      <Tabs value={0}>
        <Tab value={0} label="Projects" />
        <Tab label="Experience" />
        <Tab label="Education" />
        <Tab label="Skills" />
      </Tabs>
      <Divider />
    </div>
  );
};

export default ProfileBody;
