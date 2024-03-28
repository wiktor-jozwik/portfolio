import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import { EXPERIENCE_DATA } from '@/const';
import { Header } from '@/components/shared';
const Experience = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header name='EXPERIENCE' />
      <div className='w-4/5 space-y-14 pt-8'>
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
