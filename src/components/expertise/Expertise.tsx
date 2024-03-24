import React from 'react';
import Experience from './Experience';
import Education from './Education';
const Expertise = () => {
  return (
    <div
      id='experience'
      className='relative flex flex-row w-full justify-center mt-16 h-full'
    >
      <div className='w-2/4'>
        <Experience />
      </div>
      <div className='w-2/4'>
        <Education />
      </div>
    </div>
  );
};

export default Expertise;
