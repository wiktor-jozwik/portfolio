import React from 'react';
import Socials from '@/components/footer/Socials';
const Footer = () => {
  return (
    <footer
      id='footer'
      className='relative h-40 mt-32 bg-black flex flex-col items-center justify-center w-full space-y-6 border-t-solid border-t-2 border-primary border-opacity-50'
    >
      <div>
        <h2 className='text-lg'>Let&apos;s stay in touch!</h2>
      </div>
      <div>
        <Socials />
      </div>
      <div className='text-xs text-center'>
        DESIGNED & CREATED BY WIKTOR JÓŹWIK {new Date().getFullYear()} ©
      </div>
    </footer>
  );
};

export default Footer;
