import React from 'react';
import { PROJECTS_DATA } from '@/const';
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <div>
      <div id='projects' className='relative -top-8'></div>

      <div className='flex flex-col items-center'>
        <h1 className='flex pt-16 text-2xl lg:text-3xl w-3/5 justify-center'>
          PROJECTS
        </h1>
        <h2 className='flex text-md lg:text-base pt-5 w-3/5 justify-center'>
          I am only backend developer so I&apos;ll show you the essence - the
          code
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
