import React from 'react';
import Summary from './Summary';
const About = () => {
  return (
    <div id='about' className='pt-16 flex flex-col sm:flex-row'>
      <div className='flex items-center justify-center w-full sm:w-9/12'>
        <Summary />
      </div>
      <div className='hidden sm:flex items-center justify-center pt-8 sm:w-3/12'>
        Image
      </div>
    </div>
  );
};

export default About;
