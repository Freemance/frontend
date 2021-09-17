import React, { useState } from 'react';
import { School as SchoolIcon } from '@material-ui/icons';
import { useMutation } from '@apollo/client';

import ProfileTimeline from '@components/atoms/ProfileTimeline';
import { ActionType, useGlobalContext } from 'src/context';
import { IProfileTimelineItem } from '@components/atoms/ProfileTimeline/types';
import {
  IProfileCreateCourseRes,
  IProfileCreateCourseInput,
  PROFILE_CREATE_COURSE,
} from 'src/lib/apollo/courses';

const ProfileEducation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { dispatch, state } = useGlobalContext();

  const courses: IProfileTimelineItem[] = state.user.profile.courses
    .map((course) => ({
      id: course.id,
      name: course.course,
      institution: course.institution,
      startDate: new Date(course.startDate),
      endDate: new Date(course.endDate),
    }))
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  const [createCourse] = useMutation<
    IProfileCreateCourseRes,
    IProfileCreateCourseInput
  >(PROFILE_CREATE_COURSE);

  const handleCreateCourse = (newCourse: IProfileTimelineItem) => {
    setIsLoading(true);
    createCourse({
      variables: {
        input: {
          course: newCourse.name,
          institution: newCourse.institution,
          startDate: newCourse.startDate.toISOString(),
          endDate: newCourse.endDate.toISOString(),
        },
      },
    })
      .then((res) => {
        const upCourses = [
          ...state.user.profile.courses,
          res.data.profileCreateCourse,
        ];
        dispatch({
          type: ActionType.UpdateProfileCourses,
          payload: upCourses,
        });
        setIsLoading(false);
        setOpenDialog(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <ProfileTimeline
      nameLabel="Course"
      institutionLabel="Institution"
      icon={<SchoolIcon />}
      items={courses}
      onCreate={handleCreateCourse}
      isLoading={isLoading}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
    />
  );
};

export default ProfileEducation;
