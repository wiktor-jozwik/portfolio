import React from 'react';
import ExpertiseCard from '@/components/expertise/ExpertiseCard';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '@/const';
const Education = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-center items-center'>
        <h1 className='text-xl lg:text-3xl'>EDUCATION</h1>
      </div>

      <div className='w-4/5 xl:ml-16 space-y-14 pt-8'>
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
