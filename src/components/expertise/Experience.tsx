import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import { EXPERIENCE_DATA } from '@/const';
const Experience = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center items-center'>
        <h2>EXPERIENCE</h2>
      </div>

      <div className='ml-16 space-y-14 pt-8'>
        {EXPERIENCE_DATA.map((expData) => (
          <ExpertiseCard
            key={expData.title}
            startDate={expData.startDate}
            endDate={expData.endDate}
            title={expData.title}
            subtitle={expData.subtitle}
            description={expData.description}
            skills={expData.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
