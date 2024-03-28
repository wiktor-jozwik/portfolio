import React from 'react';
import { Header } from '@/components/shared';
import { HOBBIES_DATA } from '@/const/hobbies-data';
import HobbyCard from '@/components/hobbies/HobbyCard';
const Hobbies = () => {
  return (
    <div className='flex flex-col items-center mt-16'>
      <div id='hobbies' className='relative -top-8'></div>

      <Header name={'HOBBIES'} />
      <h2 className='text-center pt-5 w-4/5'>
        Some things I I&apos;m willing to do when I do not program
      </h2>
      <div className='w-4/5 pt-3 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {HOBBIES_DATA.map((hobby) => (
          <HobbyCard
            key={hobby.name}
            name={hobby.name}
            description={hobby.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
