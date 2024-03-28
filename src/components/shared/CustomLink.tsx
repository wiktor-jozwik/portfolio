import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  name: string;
}
const CustomLink = ({ href, name }: CustomLinkProps) => {
  return (
    <Link href={href} passHref legacyBehavior className='hover:text-primary'>
      <a className='hover:text-primary'>{name}</a>
    </Link>
  );
};

export default CustomLink;
