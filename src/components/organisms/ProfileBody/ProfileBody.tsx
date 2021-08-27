import React, { useState } from 'react';
import { Divider, Tab, Tabs } from '@material-ui/core';

import { useProfileBodyStyle } from './ProfileBody.style';

const ProfileBody = () => {
  const classes = useProfileBodyStyle();

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div className={classes.contain}>
      <Divider />
      <Tabs value={currentTab} onChange={handleTabChange} variant="scrollable">
        <Tab value={0} label="Projects" />
        <Tab value={1} label="Experience" />
        <Tab value={2} label="Education" />
        <Tab value={3} label="Skills" />
      </Tabs>
      <Divider />
    </div>
  );
};

export default ProfileBody;
