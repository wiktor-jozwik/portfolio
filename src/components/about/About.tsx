import React from 'react';
import Summary from './Summary';
const About = () => {
  return (
    <div>
      <div id='about' className='relative -top-8'></div>
      <div className='pt-16 flex flex-col sm:flex-row'>
        <div className='flex items-center justify-center sm:justify-end sm:w-8/12 lg:w-7/12'>
          <Summary />
        </div>
        <div className='hidden sm:flex items-center justify-center pt-8 sm:w-4/12 lg:w-5/12'>
          Image
        </div>
      </div>
    </div>
  );
};

export default About;
