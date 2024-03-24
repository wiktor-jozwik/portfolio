import React from 'react';
import Navbar from './NavBar';
import Logo from './Logo';
const Navigation = () => {
  return (
    <nav className='xs:relative md:sticky top-0 z-50 h-18 xs:h-28 bg-black flex flex-row items-center justify-center w-full border-t-solid border-b-2 border-primary border-opacity-50'>
      <div className='flex-1 ml-8'>
        <Logo />
      </div>
      <div className='hidden sm:block mr-8'>
        <Navbar />
      </div>
    </nav>
  );
};

export default Navigation;
