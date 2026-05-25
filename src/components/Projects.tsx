import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../types";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface ProjectsProps {
  projects: Project[];
}

function ProjectGithubIcon({
  github,
  title,
}: {
  github?: string;
  title: string;
}) {
  const label = github
    ? `View ${title} on GitHub`
    : "Add github link in src/data/profile.ts";

  if (github) {
    return (
      <a
        href={github}
        className="project-github-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title="GitHub repository"
      >
        <FiGithub />
      </a>
    );
  }

  return (
    <span
      className="project-github-icon is-empty"
      title={label}
      aria-label={label}
    >
      <FiGithub />
    </span>
  );
}

function ProjectMedia({
  image,
  title,
  projectId,
  featured,
  github,
}: {
  image?: string;
  title: string;
  projectId: string;
  featured?: boolean;
  github?: string;
}) {
  const [failed, setFailed] = useState(false);

  const showImage = image && !failed;
  const initial = title.charAt(0).toUpperCase();

  return (
    <div className={`project-media${featured ? " featured-media" : ""}`}>
      {showImage ? (
        <img
          src={image}
          alt={`${title} preview`}
          className="project-image"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="project-image-placeholder">
          <span className="project-placeholder-letter">{initial}</span>
          <span className="project-placeholder-mesh" aria-hidden />
        </div>
      )}

      <div className="project-media-shade" aria-hidden />

      <span className="project-id-badge">
        {projectId.padStart(2, "0")}
      </span>

      {featured && (
        <span className="project-featured-badge">
          Featured
        </span>
      )}

      <ProjectGithubIcon github={github} title={title} />
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.href) return null;

  return (
    <div className="project-actions">
      <a
        href={project.href}
        className="project-action-btn primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
        <span>Live demo</span>
        <FiArrowUpRight className="action-arrow" />
      </a>
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <motion.article
      className={`project-card${featured ? " featured" : ""}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="project-card-border" aria-hidden />

      <ProjectMedia
        image={project.image}
        title={project.title}
        projectId={project.id}
        featured={featured}
        github={project.github}
      />

      <div className="project-body">
        <div className="project-header">
          <h3>{project.title}</h3>
        </div>

        <p className="project-desc">
          {project.description}
        </p>

        <ul className="project-tags">
          {project.tags.map((tag, i) => (
            <li
              key={tag}
              className={i === 0 ? "tag-accent" : undefined}
            >
              {tag}
            </li>
          ))}
        </ul>

        <ProjectActions project={project} />
      </div>
    </motion.article>
  );
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section projects">
      <SectionHeading
        index="03"
        title="Selected work"
        subtitle="Full-stack builds, AI systems, and production-ready apps"
      />

      <div className="projects-showcase">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 0.03}
            className="project-reveal"
          >
            <ProjectCard
              project={project}
              featured={project.featured}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}