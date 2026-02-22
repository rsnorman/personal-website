'use client';

import { ExperienceCard } from '@personal-website/shared-ui';
import type { CareerExperience } from '@personal-website/shared-util';
import { motion } from 'motion/react';

export function ExperienceList({
  experiences,
}: {
  experiences: CareerExperience[];
}) {
  return (
    <>
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <ExperienceCard experience={exp} />
        </motion.div>
      ))}
    </>
  );
}
