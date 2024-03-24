import React from 'react';

interface SkillProps {
  name: string;
}
const Skill = ({ name }: SkillProps) => {
  return <div>{name}</div>;
};

export default Skill;
