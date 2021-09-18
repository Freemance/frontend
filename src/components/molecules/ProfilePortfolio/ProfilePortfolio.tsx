import React from 'react';

import AddProjectCard from '@components/atoms/AddProjectCard';
import ProjectCard from '@components/atoms/ProjectCard';
import { useProfileContext } from '@layouts/ProfileLayout';
import { useGlobalContext } from 'src/context';

const ProfilePortfolio = () => {
  const { state } = useGlobalContext();
  const { isEdit } = useProfileContext();

  const projects = state.user.profile.portfolioItem
    .map((p) => p)
    .sort(
      (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
    );

  return (
    <>
      {isEdit && <AddProjectCard />}
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          title={p.proyect}
          description={p.description}
          imageUrl="/static/images/no-image.jpg"
        />
      ))}
    </>
  );
};

export default ProfilePortfolio;
