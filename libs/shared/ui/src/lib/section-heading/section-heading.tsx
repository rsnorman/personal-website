import React from 'react';

export interface SectionHeadingProps {
  children: string;
  decorator?: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionHeading({
  children,
  decorator = '//',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <Tag className={className}>
      <span
        aria-hidden="true"
        style={{ color: 'var(--color-accent)', marginRight: '0.5em' }}
      >
        {decorator}
      </span>
      {children}
    </Tag>
  );
}
