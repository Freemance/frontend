import React, { useState } from 'react';
import { Divider, Tab, Tabs } from '@material-ui/core';

import { useProfileBodyStyle } from './ProfileBody.style';
import ProfileTab from '@components/molecules/ProfileTab';
import ProjectCard from '@components/atoms/ProjectCard';

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
        <ProjectCard
          title="Project One"
          imageUrl="/static/images/sample_image_1.jpg"
        />
        <ProjectCard
          title="Project Two"
          imageUrl="/static/images/sample_image_2.jpg"
        />
        <ProjectCard
          title="Project Three"
          imageUrl="/static/images/sample_image_3.jpg"
        />
      </ProfileTab>
      <ProfileTab value={currentTab} index={1}>
        Experience
      </ProfileTab>
      <ProfileTab value={currentTab} index={2}>
        Education
      </ProfileTab>
      <ProfileTab value={currentTab} index={3}>
        Skills
      </ProfileTab>
    </div>
  );
};

export default ProfileBody;
