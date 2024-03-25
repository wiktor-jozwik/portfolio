import React from 'react';
import Experience from './Experience';
import Education from './Education';
const Expertise = () => {
  return (
    <div>
      <div id='expertise' className='relative -top-8'></div>

      <div className='flex flex-col lg:flex-row mt-16'>
        <div>
          <Experience />
        </div>
        <div>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
