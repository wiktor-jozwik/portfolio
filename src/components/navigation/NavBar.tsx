import React from 'react';
import NavLink from '@/components/navigation/NavLink';
const NavBar = () => {
  return (
    <div className='flex flex-row space-x-3'>
      <NavLink href={'#about'} name={'ABOUT'} />
      <NavLink href={'#experience'} name={'EXPERIENCE'} />
      <NavLink href={'#projects'} name={'PROJECTS'} />
      <NavLink href={'#hobbies'} name={'HOBBIES'} />
      <NavLink href={'#footer'} name={'CONTACT'} separator={false} />
    </div>
  );
};

export default NavBar;
