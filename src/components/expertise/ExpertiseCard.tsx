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
      <div className='w-4/12 pr-10'>{`${getDateAbbreviation(
        startDate
      )} - ${getDateAbbreviation(endDate)}`}</div>

        <div className='bg-gray-50 w-0.5 mr-5'></div>

        <div className="w-7/12">
            <div>
                <div className='text-xl'>{title}</div>
                <div className='pb-5 text-gray-400'>{subtitle}</div>
                <div>{description}</div>
                {skills?.map((skill) => (
                    <Skill name={skill} key={skill} />
                ))}
            </div>
        </div>


    </div>
  );
};

export default ExpertiseCard;
