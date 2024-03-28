import React from 'react';
import { ProjectData } from '@/interfaces';
import { CustomLink } from '@/components/shared';

interface ProjectCardProps extends ProjectData {}
const ProjectCard = ({ name, description, projectLinks }: ProjectCardProps) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mt-5 md:space-x-10'>
      <div className='flex flex-col md:w-10/12'>
        <h3 className='text-xl text-primary-text mb-2'>{name}</h3>
        <p className='text-md text-justify'>{description}</p>
      </div>
      <div className='flex flex-row md:flex-col space-x-5 mt-2 md:space-x-0 pt-2 md:w-2/12 md:space-y-3 md:justify-center text-xs'>
        {projectLinks.map((projectLink) => (
          <CustomLink
            key={projectLink.name}
            name={projectLink.name}
            href={projectLink.href}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
