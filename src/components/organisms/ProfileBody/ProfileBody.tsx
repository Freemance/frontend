import React, { useState } from 'react';
import { Divider, Tab, Tabs } from '@material-ui/core';

import { useProfileBodyStyle } from './ProfileBody.style';
import ProfileTab from '@components/molecules/ProfileTab';
import ProjectCard from '@components/atoms/ProjectCard';
import ProfileTimeline from '@components/molecules/ProfileTimeline';
import { IProfileTimelineItem } from '@components/molecules/ProfileTimeline/types';

const ProfileBody = () => {
  const classes = useProfileBodyStyle();

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  const sampleEducationItems: IProfileTimelineItem[] = [
    {
      id: 1,
      name: 'Massachusetts Institute of Technology',
      description: 'Software Engineering Degree',
      startDate: '2008',
      endDate: '2012',
    },
    {
      id: 2,
      name: 'Harvard University',
      description: 'Computer Science',
      startDate: '2012',
      endDate: '2014',
    },
  ];

  const sampleJobItems: IProfileTimelineItem[] = [
    {
      id: 1,
      name: 'Facebook',
      description: 'Frontend Developer',
      startDate: '2014',
      endDate: '2018',
    },
    {
      id: 2,
      name: 'Google',
      description: 'Fullstack Developer',
      startDate: '2018',
      endDate: 'Now',
    },
  ];

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
        <ProfileTimeline items={sampleJobItems} />
      </ProfileTab>
      <ProfileTab value={currentTab} index={2}>
        <ProfileTimeline items={sampleEducationItems} />
      </ProfileTab>
      <ProfileTab value={currentTab} index={3}>
        Skills
      </ProfileTab>
    </div>
  );
};

export default ProfileBody;
