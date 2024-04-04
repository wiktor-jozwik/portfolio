import React from 'react';
import Summary from './Summary';
import Image from 'next/image';

import MeImage from '../../../public/me.jpg';

const About = () => {
  return (
    <div>
      <div id='about' className='relative -top-8'></div>
      <div className='pt-16 flex flex-col sm:flex-row'>
        <div className='flex items-center justify-center md:justify-end md:w-8/12 lg:w-7/12'>
          <Summary />
        </div>
        <div className='hidden lg:flex sm:w-5/12 justify-center'>
          <Image
            className='w-72 justify-end aspect-auto rounded-full'
            src={MeImage}
            alt={'Image of Wiktor Jóźwik'}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
