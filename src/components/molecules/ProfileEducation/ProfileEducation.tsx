import React from 'react';
import { School as SchoolIcon } from '@material-ui/icons';

import ProfileTimeline from '@components/atoms/ProfileTimeline';
import { useGlobalContext } from 'src/context';
import { IProfileTimelineItem } from '@components/atoms/ProfileTimeline/types';

const ProfileEducation = () => {
  const { state } = useGlobalContext();

  const courses: IProfileTimelineItem[] = state.user.profile.courses
    .map((course) => ({
      id: course.id,
      name: course.course,
      institution: course.institution,
      startDate: new Date(course.startDate),
      endDate: new Date(course.endDate),
    }))
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return <ProfileTimeline icon={<SchoolIcon />} items={courses} />;
};

export default ProfileEducation;
