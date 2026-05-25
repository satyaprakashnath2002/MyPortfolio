export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  subtitle?: string;
  period: string;
  role: string;
  mode: string;
  bullets: string[];
  /** Image in /public/experience, e.g. "/experience/tekkyz.png" */
  logo?: string;
}


export interface Education {
  school: string;
  period: string;
  degree: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  /** Live demo URL */
  href?: string;
  /** GitHub repository URL */
  github?: string;
  /** Image in /public, e.g. "/projects/my-app.png" */
  image?: string;
  featured?: boolean;
}

export interface SiteContent {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  about: string[];
  nav: NavLink[];
  socials: SocialLink[];
  skillGroups: SkillGroup[];
  experience: Experience[];
  education: Education;
  projects: Project[];
}
