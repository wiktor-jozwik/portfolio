import React from 'react';
import Navbar from './NavBar';
import Logo from './Logo';
const Navigation = () => {
  return (
    <nav className='sticky top-0 z-50 h-14 xs:h-28 bg-black flex flex-row items-center justify-center w-full border-t-solid border-b-2 border-primary border-opacity-50'>
      <div className='flex-1 ml-2 md:ml-8 lg:ml-28'>
        <Logo />
      </div>
      <div className='hidden sm:block mr-4 lg:mr-16'>
        <Navbar />
      </div>
    </nav>
  );
};

export default Navigation;
