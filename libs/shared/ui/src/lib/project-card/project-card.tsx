import type { Project } from '@personal-website/shared-util';
import React from 'react';

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={className}
      style={{
        border: '1px solid var(--color-border)',
        padding: '1.5rem',
        borderRadius: '2px',
        transition: 'border-color 0.2s ease',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.125rem',
          color: 'var(--color-text-primary)',
          marginBottom: '0.5rem',
        }}
      >
        {project.name}
      </h3>
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '1rem',
          lineHeight: 1.6,
          maxWidth: '100%',
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1rem',
        }}
      >
        {project.technologies.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-accent)',
              border: '1px solid var(--color-border)',
              padding: '0.125rem 0.5rem',
              borderRadius: '2px',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            style={{
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
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
            style={{
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            {'[live]'}
          </a>
        )}
      </div>
    </article>
  );
}
