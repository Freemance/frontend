import React, { useState } from 'react';
import { Work as WorkIcon } from '@material-ui/icons';

import ProfileTimeline from '@components/atoms/ProfileTimeline';
import { IProfileTimelineItem } from '@components/atoms/ProfileTimeline';
import { useGlobalContext } from 'src/context';

const ProfileExperience = () => {
  const [isLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { state } = useGlobalContext();

  const jobs: IProfileTimelineItem[] = state.user.profile.employmentHistory
    .map((job) => ({
      id: job.id,
      name: job.name,
      institution: job.company,
      startDate: new Date(job.startDate),
      endDate: new Date(job.endDate),
    }))
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  const handleCreateJob = () => {};

  const handleUpdateJob = () => {};

  const handleDeleteJob = () => {};

  return (
    <ProfileTimeline
      nameLabel="Course"
      institutionLabel="Institution"
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
