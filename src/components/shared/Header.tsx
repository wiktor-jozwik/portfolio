import React from 'react';

interface HeaderProps {
  name: string;
}
const Header = ({ name }: HeaderProps) => {
  return (
    <h1 className='flex pt-16 text-2xl w-3/5 justify-center items-center'>
      {name}
    </h1>
  );
};

export default Header;
