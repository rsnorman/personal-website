import { projects } from '@personal-website/shared-util';
import { SectionHeading, ProjectCard } from '@personal-website/shared-ui';
import type { Metadata } from 'next';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Side projects and open source work spanning music discovery, travel tools, and developer productivity.',
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <main id="main-content" className={styles.page}>
      <SectionHeading decorator=">">Projects</SectionHeading>

      <div className={styles.grid}>
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
