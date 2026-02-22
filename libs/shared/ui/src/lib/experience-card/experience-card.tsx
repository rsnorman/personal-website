import type { CareerExperience } from '@personal-website/shared-util';
import React from 'react';

export interface ExperienceCardProps {
  experience: CareerExperience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const sortedRoles = [...experience.roles].sort(
    (a, b) => (b.endYear ?? 9999) - (a.endYear ?? 9999),
  );

  return (
    <article
      className={className}
      style={{
        borderLeft: '2px solid var(--color-border)',
        paddingLeft: '1.5rem',
        marginBottom: '2.5rem',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
          color: 'var(--color-text-primary)',
          marginBottom: '0.25rem',
        }}
      >
        {experience.company}
      </h3>
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '1rem',
          maxWidth: '100%',
        }}
      >
        {experience.companyDescription}
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        {sortedRoles.map((role, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                color:
                  i === 0
                    ? 'var(--color-accent)'
                    : 'var(--color-text-secondary)',
              }}
            >
              {role.title}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-display)',
              }}
            >
              {role.startYear} — {role.endYear ?? 'Present'}
            </span>
          </div>
        ))}
      </div>

      {experience.highlights.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                paddingLeft: '1rem',
                position: 'relative',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--color-accent)',
                }}
              >
                —
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
