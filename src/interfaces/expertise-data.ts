interface ExpertiseData {
  startDate: Date;
  endDate: Date | null;
  title: string;
  subtitle: string;
  description: string;
}

export interface ExperienceData extends ExpertiseData {
  skills: string[];
}
export interface EducationData extends ExpertiseData {}
