import type { Project, SiteContent, SocialLink } from "../types";
import { profile } from "./profile";

function projectLinks(p: (typeof profile.projects)[number]): Project {
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    tags: p.tags,
    featured: p.featured,
    ...(p.href ? { href: p.href } : {}),
    ...(p.github ? { github: p.github } : {}),
    ...(p.image ? { image: p.image } : {}),
  };
}

const socialEntries: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: profile.socials.github,
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.socials.linkedin,
    icon: "linkedin",
  },
];

if (profile.socials.twitter) {
  socialEntries.push({
    id: "twitter",
    label: "X",
    href: profile.socials.twitter,
    icon: "twitter",
  });
}

export const site: SiteContent = {
  name: profile.name,
  role: profile.role,
  tagline: profile.tagline,
  email: profile.email,
  phone: profile.phone,
  location: profile.location,
  about: profile.about,
  nav: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },

  ],

  socials: socialEntries,
  skillGroups: profile.skillGroups,
  experience: profile.experience,
  education: profile.education,
  projects: profile.projects.map(projectLinks),
};

export { profile };
