import { SectionHeading } from '@personal-website/shared-ui';
import type { Metadata } from 'next';
import { MediaContent } from './media-content';
import styles from './media.module.css';

export const metadata: Metadata = {
  title: 'Media',
  description:
    'What I\'m listening to, reading, watching, and playing.',
};

export default function MediaPage() {
  return (
    <main id="main-content" className={styles.page}>
      <SectionHeading decorator="~">Media</SectionHeading>
      <MediaContent />
    </main>
  );
}
