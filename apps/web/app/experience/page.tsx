import { experiences } from '@personal-website/shared-util';
import { SectionHeading } from '@personal-website/shared-ui';
import { ExperienceList } from './experience-list';
import type { Metadata } from 'next';
import styles from './experience.module.css';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Career journey from hands-on development to engineering leadership across healthcare technology.',
};

export default function ExperiencePage() {
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <main id="main-content" className={styles.page}>
      <SectionHeading decorator="//">Experience</SectionHeading>
      <div className={styles.content}>
        <ExperienceList experiences={sorted} />
      </div>
    </main>
  );
}
