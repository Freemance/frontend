import React, { useState } from 'react';
import { Work as WorkIcon } from '@material-ui/icons';
import { useMutation } from '@apollo/client';

import ProfileTimeline from '@components/atoms/ProfileTimeline';
import { IProfileTimelineItem } from '@components/atoms/ProfileTimeline';
import { ActionType, useGlobalContext } from 'src/context';
import {
  IProfileCreateJobInput,
  IProfileCreateJobRes,
  IProfileDeleteJobInput,
  IProfileDeleteJobRes,
  IProfileUpdateJobInput,
  IProfileUpdateJobRes,
  PROFILE_CREATE_JOB,
  PROFILE_DELETE_JOB,
  PROFILE_UPDATE_JOB,
} from 'src/lib/apollo/jobs';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileExperience = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { dispatch, state } = useGlobalContext();
  const { isUser, profile } = useProfileContext();

  const jobs: IProfileTimelineItem[] = (
    isUser ? state.user.profile : profile
  ).employmentHistory
    .map((job) => ({
      id: job.id,
      name: job.name,
      institution: job.company,
      startDate: new Date(job.startDate),
      endDate: new Date(job.endDate),
    }))
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  const [createJob] = useMutation<IProfileCreateJobRes, IProfileCreateJobInput>(
    PROFILE_CREATE_JOB
  );

  const [updateJob] = useMutation<IProfileUpdateJobRes, IProfileUpdateJobInput>(
    PROFILE_UPDATE_JOB
  );

  const [deleteJob] = useMutation<IProfileDeleteJobRes, IProfileDeleteJobInput>(
    PROFILE_DELETE_JOB
  );

  const handleCreateJob = (newJob: IProfileTimelineItem) => {
    setIsLoading(true);
    createJob({
      variables: {
        input: {
          name: newJob.name,
          company: newJob.institution,
          startDate: newJob.startDate.toISOString(),
          endDate: newJob.endDate.toISOString(),
        },
      },
    })
      .then((res) => {
        const upJobs = [
          ...state.user.profile.employmentHistory,
          res.data.profileCreateJob,
        ].sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
        dispatch({
          type: ActionType.UpdateProfileJobs,
          payload: upJobs,
        });
        setIsLoading(false);
        setOpenDialog(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleUpdateJob = (
    editJob: IProfileTimelineItem,
    editIndex: number
  ) => {
    setIsLoading(true);
    updateJob({
      variables: {
        id: editJob.id,
        input: {
          name: editJob.name,
          company: editJob.institution,
          startDate: editJob.startDate.toISOString(),
          endDate: editJob.endDate.toISOString(),
        },
      },
    })
      .then((res) => {
        let upJobs = state.user.profile.employmentHistory
          .map((j) => j)
          .sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        upJobs = [
          ...upJobs.slice(0, editIndex),
          res.data.profileUpdateJob,
          ...upJobs.slice(editIndex + 1),
        ].sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
        setIsLoading(false);
        setOpenDialog(false);
        dispatch({
          type: ActionType.UpdateProfileJobs,
          payload: upJobs,
        });
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleDeleteJob = (deleteId: number, deleteIndex: number) => {
    setIsLoading(true);
    deleteJob({
      variables: {
        id: deleteId,
      },
    })
      .then((res) => {
        if (res.data.profileDeleteJob) {
          let upJobs = state.user.profile.employmentHistory
            .map((j) => j)
            .sort(
              (a, b) =>
                new Date(b.startDate).getTime() -
                new Date(a.startDate).getTime()
            );
          upJobs = [
            ...upJobs.slice(0, deleteIndex),
            ...upJobs.slice(deleteIndex + 1),
          ].sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
          setIsLoading(false);
          setOpenDialog(false);
          dispatch({
            type: ActionType.UpdateProfileJobs,
            payload: upJobs,
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
      nameLabel="Job"
      institutionLabel="Company"
      icon={<WorkIcon />}
      items={jobs}
      onCreate={handleCreateJob}
      onEdit={handleUpdateJob}
      onDelete={handleDeleteJob}
      isLoading={isLoading}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
    />
  );
};

export default ProfileExperience;
