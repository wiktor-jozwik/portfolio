import React from 'react';

interface SkillProps {
  name: string;
}
const Skill = ({ name }: SkillProps) => {
  return (
    <div className='text-sm bg-primary bg-opacity-40 text-primary-text py-0.5 px-3.5 rounded-lg m-2'>
      {name}
    </div>
  );
};

export default Skill;
