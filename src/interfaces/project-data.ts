interface ProjectLink {
  href: string;
  name: string;
}
export interface ProjectData {
  name: string;
  description: string;
  projectLinks: ProjectLink[];
}
