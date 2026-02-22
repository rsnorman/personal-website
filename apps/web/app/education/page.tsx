import { education } from '@personal-website/shared-util';
import { SectionHeading } from '@personal-website/shared-ui';
import type { Metadata } from 'next';
import styles from './education.module.css';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'Computer Science and MBA credentials from Michigan universities.',
};

export default function EducationPage() {
  const sorted = [...education].sort((a, b) => a.order - b.order);

  return (
    <main id="main-content" className={styles.page}>
      <SectionHeading decorator="$">Education</SectionHeading>

      <div className={styles.list}>
        {sorted.map((edu) => (
          <article key={edu.id} className={styles.card}>
            <h3 className={styles.institution}>{edu.institution}</h3>
            <p className={styles.degree}>{edu.degree}</p>
            <p className={styles.location}>{edu.location}</p>
            {edu.activities && edu.activities.length > 0 && (
              <ul className={styles.activities}>
                {edu.activities.map((activity, i) => (
                  <li key={i} className={styles.activity}>
                    <span aria-hidden="true" className={styles.activityDash}>
                      —
                    </span>
                    {activity}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
