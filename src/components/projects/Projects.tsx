import React from 'react';
import { PROJECTS_DATA } from '@/const';
import ProjectCard from './ProjectCard';
import { Header } from '@/components/shared';
const Projects = () => {
  return (
    <div>
      <div id='projects' className='relative -top-8'></div>

      <div className='flex flex-col items-center'>
        <Header name='PROJECTS' />
        <h2 className='text-md lg:text-base pt-5 w-3/5 text-center'>
          As a backend developer I&apos;ll show you the essence -{' '}
          <span className='text-primary-text'>THE CODE</span>
        </h2>
        <div className='flex flex-col space-y-12 w-4/5 lg:w-3/5 text-justify relative pt-10'>
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              projectLinks={project.projectLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
