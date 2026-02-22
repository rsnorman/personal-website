import { experiences } from '@personal-website/shared-util';
import { SectionHeading } from '@personal-website/shared-ui';
import { ExperienceList } from './experience-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Career journey from hands-on development to engineering leadership across healthcare technology.',
};

export default function ExperiencePage() {
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <main
      id="main-content"
      style={{ maxWidth: '48rem', margin: '0 auto', padding: '6rem 2rem 4rem' }}
    >
      <SectionHeading decorator="//">Experience</SectionHeading>
      <div style={{ marginTop: '2.5rem' }}>
        <ExperienceList experiences={sorted} />
      </div>
    </main>
  );
}
