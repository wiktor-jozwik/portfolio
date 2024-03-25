import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import { EXPERIENCE_DATA } from '@/const';
const Experience = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-24'>
      <div className='flex justify-center items-center'>
        <h1 className='text-xl lg:text-2xl'>EXPERIENCE</h1>
      </div>

      <div className='w-4/5 lg:ml-4 space-y-14 pt-8'>
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
