import React, { useState } from 'react';
import { Divider, Tab, Tabs } from '@material-ui/core';

import { useProfileBodyStyle } from './ProfileBody.style';
import ProfileTab from '@components/molecules/ProfileTab';
import ProfileSkills from '@components/molecules/ProfileSkills';
import ProfileEducation from '@components/molecules/ProfileEducation';
import ProfileExperience from '@components/molecules/ProfileExperience';
import ProfilePortfolio from '@components/molecules/ProfilePortfolio';

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
      <ProfileTab value={currentTab} index={0}>
        <ProfilePortfolio />
      </ProfileTab>
      <ProfileTab value={currentTab} index={1}>
        <ProfileExperience />
      </ProfileTab>
      <ProfileTab value={currentTab} index={2}>
        <ProfileEducation />
      </ProfileTab>
      <ProfileTab value={currentTab} index={3}>
        <ProfileSkills />
      </ProfileTab>
    </div>
  );
};

export default ProfileBody;
