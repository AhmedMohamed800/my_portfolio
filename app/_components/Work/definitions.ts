export interface ProjectProps {
  num: string;
  id: string;
  title: string;
  img: string;
  role: string;
  client: string;
  date: string;
  description: string;
  liveLink: string;
  sourceLink: string;
}

export interface WorkRowProps extends ProjectProps {
  onHover: () => void;
  onLeave: () => void;
}

export interface WorkSectionProps {
  projects: ProjectProps[];
}
