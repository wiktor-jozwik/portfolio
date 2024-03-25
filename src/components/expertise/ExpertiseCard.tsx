import React from 'react';
import Skill from './Skill';
import { getDateAbbreviation } from '@/utils';
import { EducationData, ExperienceData } from '@/interfaces';

type ExpertiseCardProps = EducationData | ExperienceData;

const ExpertiseCard = (props: ExpertiseCardProps) => {
  const { title, subtitle, startDate, endDate, description } = props;
  const skills = 'skills' in props ? props.skills : undefined;
  return (
    <div className='flex flex-row'>
      <div className='w-2/12 xl:w-3/12 xl:pr-10 text-[13px] md:text-xs xl:text-base mt-2'>{`${getDateAbbreviation(
        startDate
      )} - ${getDateAbbreviation(endDate)}`}</div>

      <div className='bg-gray-50 w-0.5 mr-5 ml-5'></div>

      <div className='flex-1'>
        <div>
          <div className='text-xl text-primary-text'>{title}</div>
          <div className='pb-5 text-gray-400'>{subtitle}</div>
          <div className='text-base'>{description}</div>
          <div className='flex flex-row mt-5 flex-wrap'>
            {skills?.map((skill) => (
              <Skill name={skill} key={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
