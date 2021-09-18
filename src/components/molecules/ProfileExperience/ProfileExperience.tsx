import React, { useState } from 'react';
import { Work as WorkIcon } from '@material-ui/icons';

import ProfileTimeline from '@components/atoms/ProfileTimeline';
import { IProfileTimelineItem } from '@components/atoms/ProfileTimeline';
import { ActionType, useGlobalContext } from 'src/context';
import {
  IProfileCreateJobInput,
  IProfileCreateJobRes,
  PROFILE_CREATE_JOB,
} from 'src/lib/apollo/jobs';
import { useMutation } from '@apollo/client';

const ProfileExperience = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { dispatch, state } = useGlobalContext();

  const jobs: IProfileTimelineItem[] = state.user.profile.employmentHistory
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

  const handleUpdateJob = () => {};

  const handleDeleteJob = () => {};

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
