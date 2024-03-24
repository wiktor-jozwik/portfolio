import React from 'react';
import Summary from './Summary';
const About = () => {
  return (
    <div id='about' className='pt-16 flex flex-col lg:flex-row'>
      <div className='flex items-center justify-center lg:w-7/12'>
        <Summary />
      </div>
      <div className='pt-8 flex items-center justify-center lg:w-4/12'>
        Image
      </div>
    </div>
  );
};

export default About;
