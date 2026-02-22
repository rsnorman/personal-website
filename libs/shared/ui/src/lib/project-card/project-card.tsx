import type { Project } from '@personal-website/shared-util';
import React from 'react';
import styles from './project-card.module.css';

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ''} ${className ?? ''}`}
    >
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.technologies}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className={styles.link}
          >
            {'[github]'}
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live demo`}
            className={styles.link}
          >
            {'[live]'}
          </a>
        )}
      </div>
    </article>
  );
}
