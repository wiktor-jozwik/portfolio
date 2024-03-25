import { ExperienceData } from '@/interfaces';
import { Skill } from '@/enums';

export const EXPERIENCE_DATA: ExperienceData[] = [
  {
    title: 'Flip',
    subtitle: 'Backend Engineer',
    startDate: new Date('2023-11-27'),
    endDate: null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing dignissim et vitae augue. Lorem ipsum dolor sit amet, consectetur adipiscing dignissim et vitae augue. Vivamus venenatis nibh et metus tincidunt, non maximus risus facilisis. Nulla id tempor tortor. Ut lacinia malesuada tortor at venenatis.',
    skills: [
      Skill.NODE,
      Skill.NEST,
      Skill.TS,
      Skill.RABBIT,
      Skill.MONGO,
      Skill.DOCKER,
      Skill.K8S,
      Skill.AWS,
      Skill.CICD,
    ],
  },
  {
    title: 'Polcode',
    subtitle: 'Backend Engineer',
    startDate: new Date('2022-08-17'),
    endDate: new Date('2023-11-24'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing dignissim et vitae augue. Lorem ipsum dolor sit amet, consectetur adipiscing dignissim et vitae augue. Vivamus venenatis nibh et metus tincidunt, non maximus risus facilisis. Nulla id tempor tortor. Ut lacinia malesuada tortor at venenatis.',
    skills: [
      Skill.NODE,
      Skill.NEST,
      Skill.TS,
      Skill.MONGO,
      Skill.POSTGRES,
      Skill.DOCKER,
      Skill.AWS,
      Skill.AZURE,
      Skill.CICD,
      Skill.REACT,
    ],
  },
  {
    title: 'Beside The Park',
    subtitle: 'Junior Software Engineer',
    startDate: new Date('2021-01-08'),
    endDate: new Date('2022-08-10'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing dignissim et vitae augue. Lorem ipsum dolor sit amet, consectetur adipiscing dignissim et vitae augue. Vivamus venenatis nibh et metus tincidunt, non maximus risus facilisis. Nulla id tempor tortor. Ut lacinia malesuada tortor at venenatis.',
    skills: [
      Skill.NODE,
      Skill.NEST,
      Skill.TS,
      Skill.ROR,
      Skill.POSTGRES,
      Skill.GRAPHQL,
      Skill.DOCKER,
      Skill.AWS,
      Skill.AZURE,
      Skill.CICD,
      Skill.PYTHON,
      Skill.REACT,
    ],
  },
];
