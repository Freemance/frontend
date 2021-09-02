import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  Divider,
  Grid,
  Tab,
  Tabs,
} from '@material-ui/core';
import {
  AddCircleOutline as AddIcon,
  School as SchoolIcon,
  Work as WorkIcon,
} from '@material-ui/icons';

import { useProfileBodyStyle } from './ProfileBody.style';
import ProfileTab from '@components/molecules/ProfileTab';
import ProjectCard from '@components/atoms/ProjectCard';
import ProfileTimeline from '@components/molecules/ProfileTimeline';
import { IProfileTimelineItem } from '@components/molecules/ProfileTimeline/types';
import ProfileSkills from '@components/molecules/ProfileSkills';
import { ISkillItem } from '@components/molecules/ProfileSkills/types';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileBody = () => {
  const classes = useProfileBodyStyle();

  const [currentTab, setCurrentTab] = useState(0);

  const { isEdit } = useProfileContext();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  const sampleEducationItems: IProfileTimelineItem[] = [
    {
      id: 1,
      name: 'Harvard University',
      description: 'Computer Science',
      startDate: '2012',
      endDate: '2014',
    },
    {
      id: 2,
      name: 'Massachusetts Institute of Technology',
      description: 'Software Engineering Degree',
      startDate: '2008',
      endDate: '2012',
    },
  ];

  const sampleJobItems: IProfileTimelineItem[] = [
    {
      id: 1,
      name: 'Facebook',
      description: 'Frontend Developer',
      startDate: '2018',
      endDate: 'Now',
    },
    {
      id: 2,
      name: 'Google',
      description: 'Fullstack Developer',
      startDate: '2016',
      endDate: '2018',
    },
  ];

  const sampleSkills: ISkillItem[] = [
    {
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'Vue',
    },
    {
      id: 3,
      name: 'NodeJS',
    },
    {
      id: 4,
      name: 'Flutter',
    },
    {
      id: 5,
      name: 'MySQL',
    },
    {
      id: 6,
      name: 'Django',
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
        {isEdit && (
          <Grid item xs={12} sm={4} md={3}>
            <Card className={classes.addProjectCard}>
              <CardActionArea className={classes.addProjectCardAction}>
                <div className={classes.addProjectCardContent}>
                  <AddIcon fontSize="large" />
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        )}
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
        <ProfileTimeline icon={<SchoolIcon />} items={sampleEducationItems} />
      </ProfileTab>
      <ProfileTab value={currentTab} index={3}>
        <ProfileSkills skills={sampleSkills} />
      </ProfileTab>
    </div>
  );
};

export default ProfileBody;
