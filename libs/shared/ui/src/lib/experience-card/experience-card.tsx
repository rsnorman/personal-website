import type { CareerExperience } from '@personal-website/shared-util';
import React from 'react';
import styles from './experience-card.module.css';

export interface ExperienceCardProps {
  experience: CareerExperience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const sortedRoles = [...experience.roles].sort(
    (a, b) => (b.endYear ?? 9999) - (a.endYear ?? 9999),
  );

  return (
    <article className={`${styles.card} ${className ?? ''}`}>
      <h3 className={styles.company}>{experience.company}</h3>
      <p className={styles.companyDescription}>{experience.companyDescription}</p>

      <div className={styles.roles}>
        {sortedRoles.map((role, i) => (
          <div key={i} className={styles.role}>
            <span
              className={`${styles.roleTitle} ${i === 0 ? styles.roleTitleCurrent : ''}`}
            >
              {role.title}
            </span>
            <span className={styles.roleDate}>
              {role.startYear} — {role.endYear ?? 'Present'}
            </span>
          </div>
        ))}
      </div>

      {experience.highlights.length > 0 && (
        <ul className={styles.highlights}>
          {experience.highlights.map((highlight, i) => (
            <li key={i} className={styles.highlight}>
              <span aria-hidden="true" className={styles.highlightDash}>
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
