import React from 'react';
import ExpertiseCard from '@/components/expertise/ExpertiseCard';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '@/const';
const Education = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center items-center'>
        <h2>EDUCATION</h2>
      </div>

      <div className='ml-16 space-y-14 pt-8'>
        {EDUCATION_DATA.map((expData) => (
          <ExpertiseCard
            key={expData.title}
            startDate={expData.startDate}
            endDate={expData.endDate}
            title={expData.title}
            subtitle={expData.subtitle}
            description={expData.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
