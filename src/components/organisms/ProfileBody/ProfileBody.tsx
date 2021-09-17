import React, { useState } from 'react';
import { Divider, Tab, Tabs } from '@material-ui/core';
import { School as SchoolIcon, Work as WorkIcon } from '@material-ui/icons';

import { useProfileBodyStyle } from './ProfileBody.style';
import ProfileTab from '@components/molecules/ProfileTab';
import ProjectCard from '@components/atoms/ProjectCard';
import ProfileTimeline from '@components/molecules/ProfileTimeline';
import { IProfileTimelineItem } from '@components/molecules/ProfileTimeline/types';
import ProfileSkills from '@components/molecules/ProfileSkills';
import { useProfileContext } from '@layouts/ProfileLayout';
import AddProjectCard from '@components/atoms/AddProjectCard';
import { useGlobalContext } from 'src/context';

const ProfileBody = () => {
  const classes = useProfileBodyStyle();

  const [currentTab, setCurrentTab] = useState(0);

  const { isEdit } = useProfileContext();

  const { state } = useGlobalContext();

  const courses: IProfileTimelineItem[] = state.user.profile.courses
    .map((course) => ({
      id: course.id,
      name: course.course,
      institution: course.institution,
      startDate: new Date(course.startDate),
      endDate: new Date(course.endDate),
    }))
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  const sampleJobItems: IProfileTimelineItem[] = [
    {
      id: 1,
      name: 'Facebook',
      institution: 'Frontend Developer',
      startDate: new Date('2018'),
      endDate: new Date(),
    },
    {
      id: 2,
      name: 'Google',
      institution: 'Fullstack Developer',
      startDate: new Date('2016'),
      endDate: new Date('2018'),
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
        {isEdit && <AddProjectCard />}
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
        <ProfileTimeline icon={<WorkIcon />} items={sampleJobItems} />
      </ProfileTab>
      <ProfileTab value={currentTab} index={2}>
        <ProfileTimeline icon={<SchoolIcon />} items={courses} />
      </ProfileTab>
      <ProfileTab value={currentTab} index={3}>
        <ProfileSkills />
      </ProfileTab>
    </div>
  );
};

export default ProfileBody;
