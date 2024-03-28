import React from 'react';
import ExpertiseCard from '@/components/expertise/ExpertiseCard';
import { EDUCATION_DATA } from '@/const';
import { Header } from '@/components/shared';
const Education = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header name='EDUCATION' />

      <div className='w-4/5 space-y-14 pt-8'>
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
