import React from 'react';
import { HobbyData } from '@/interfaces';

interface HobbyCardProps extends HobbyData {}
const HobbyCard = ({ name, description }: HobbyCardProps) => {
  return (
    <div className='m-4 p-2 pb-2.5 bg-gradient-to-b from-primary/65 to-primary/5 rounded-lg'>
      <h3 className='text-center pb-1.5'>{name}</h3>
      <p className='text-center text-xs text-primary-text'>{description}</p>
    </div>
  );
};

export default HobbyCard;
