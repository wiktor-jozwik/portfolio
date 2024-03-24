import React from 'react';
import Navbar from './NavBar';
import Logo from './Logo';
const Navigation = () => {
  return (
    <nav className='sticky top-0 z-50 h-28 bg-black flex flex-row items-center justify-center w-full border-t-solid border-b-2 border-primary border-opacity-50'>
      <div className='md:flex-1 md:ml-8 lg:ml-28'>
        <Logo />
      </div>
      <div className='hidden md:block md:mr-8 lg:mr-28'>
        <Navbar />
      </div>
    </nav>
  );
};

export default Navigation;
