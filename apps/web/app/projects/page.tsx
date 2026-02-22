import { projects } from '@personal-website/shared-util';
import { SectionHeading, ProjectCard } from '@personal-website/shared-ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Side projects and open source work spanning music discovery, travel tools, and developer productivity.',
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <main
      id="main-content"
      style={{ maxWidth: '48rem', margin: '0 auto', padding: '6rem 2rem 4rem' }}
    >
      <SectionHeading decorator=">">Projects</SectionHeading>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2.5rem',
        }}
      >
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {other.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
