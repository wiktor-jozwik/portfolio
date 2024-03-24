import React from 'react';
import Image from 'next/image'

import logo from '../../../public/logo-512x512.png';


const Logo = () => {
  return (
      <Image
          src={logo}
          width={64}
          height={64}
          alt="wiktorjozwik.com"
      />
  );
};

export default Logo;
