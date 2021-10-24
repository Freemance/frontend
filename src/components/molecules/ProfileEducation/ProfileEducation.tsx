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
  PROFILE_UPDATE_COURSE,
  IProfileUpdateCourseRes,
  IProfileUpdateCourseInput,
  PROFILE_DELETE_COURSE,
  IProfileDeleteCourseRes,
  IProfileDeleteCourseInput,
} from 'src/lib/apollo/courses';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileEducation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { dispatch, state } = useGlobalContext();
  const { isUser, profile } = useProfileContext();

  const courses: IProfileTimelineItem[] = (
    isUser ? state.user.profile : profile
  ).courses
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

  const [updateCourse] = useMutation<
    IProfileUpdateCourseRes,
    IProfileUpdateCourseInput
  >(PROFILE_UPDATE_COURSE);

  const [deleteCourse] = useMutation<
    IProfileDeleteCourseRes,
    IProfileDeleteCourseInput
  >(PROFILE_DELETE_COURSE);

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
        ].sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
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

  const handleUpdateCourse = (
    editCourse: IProfileTimelineItem,
    editIndex: number
  ) => {
    setIsLoading(true);
    updateCourse({
      variables: {
        id: editCourse.id,
        input: {
          course: editCourse.name,
          institution: editCourse.institution,
          startDate: editCourse.startDate.toISOString(),
          endDate: editCourse.endDate.toISOString(),
        },
      },
    })
      .then((res) => {
        let upCourses = state.user.profile.courses
          .map((c) => c)
          .sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        upCourses = [
          ...upCourses.slice(0, editIndex),
          res.data.profileUpdateCourse,
          ...upCourses.slice(editIndex + 1),
        ].sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
        setIsLoading(false);
        setOpenDialog(false);
        dispatch({
          type: ActionType.UpdateProfileCourses,
          payload: upCourses,
        });
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleDeleteCourse = (deleteId: number, deleteIndex: number) => {
    setIsLoading(true);
    deleteCourse({
      variables: {
        id: deleteId,
      },
    })
      .then((res) => {
        if (res.data.profileDeleteCourse) {
          let upCourses = state.user.profile.courses
            .map((c) => c)
            .sort(
              (a, b) =>
                new Date(b.startDate).getTime() -
                new Date(a.startDate).getTime()
            );
          upCourses = [
            ...upCourses.slice(0, deleteIndex),
            ...upCourses.slice(deleteIndex + 1),
          ].sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
          setIsLoading(false);
          setOpenDialog(false);
          dispatch({
            type: ActionType.UpdateProfileCourses,
            payload: upCourses,
          });
        } else {
          throw new Error('Failed to delete course');
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <ProfileTimeline
      nameLabel="Degree"
      institutionLabel="Institution"
      icon={<SchoolIcon />}
      items={courses}
      onCreate={handleCreateCourse}
      onEdit={handleUpdateCourse}
      onDelete={handleDeleteCourse}
      isLoading={isLoading}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
    />
  );
};

export default ProfileEducation;
