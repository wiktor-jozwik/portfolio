import React from 'react';
import Skill from './Skill';
import { getDateAbbreviation } from '@/utils';
import { EducationData, ExperienceData } from '@/interfaces';

type ExpertiseCardProps = EducationData | ExperienceData;

const ExpertiseCard = (props: ExpertiseCardProps) => {
  const { title, subtitle, startDate, endDate, description } = props;
  const skills = 'skills' in props ? props.skills : undefined;
  return (
    <div className='flex flex-row justify-center'>
      <div className='flex w-4/12 xl:w-4/12 xl:pr-10 text-xs md:text-base mt-2'>{`${getDateAbbreviation(
        startDate
      )} - ${getDateAbbreviation(endDate)}`}</div>

      <div className='bg-gray-50 w-0.5 mr-5 ml-5'></div>

      <div className='w-10/12 xl:w-7/12'>
        <div>
          <div className='text-xl'>{title}</div>
          <div className='pb-5 text-gray-400'>{subtitle}</div>
          <div className='text-base'>{description}</div>
          {skills?.map((skill) => (
            <Skill name={skill} key={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
