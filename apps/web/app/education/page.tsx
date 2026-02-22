import { education } from '@personal-website/shared-util';
import { SectionHeading } from '@personal-website/shared-ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'Computer Science and MBA credentials from Michigan universities.',
};

export default function EducationPage() {
  const sorted = [...education].sort((a, b) => a.order - b.order);

  return (
    <main
      id="main-content"
      style={{ maxWidth: '48rem', margin: '0 auto', padding: '6rem 2rem 4rem' }}
    >
      <SectionHeading decorator="$">Education</SectionHeading>

      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {sorted.map((edu) => (
          <article
            key={edu.id}
            style={{
              borderLeft: '2px solid var(--color-border)',
              paddingLeft: '1.5rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: 'var(--color-text-primary)',
                marginBottom: '0.25rem',
              }}
            >
              {edu.institution}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                color: 'var(--color-accent)',
                marginBottom: '0.25rem',
              }}
            >
              {edu.degree}
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              {edu.location}
            </p>
            {edu.activities && edu.activities.length > 0 && (
              <ul
                style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}
              >
                {edu.activities.map((activity, i) => (
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
