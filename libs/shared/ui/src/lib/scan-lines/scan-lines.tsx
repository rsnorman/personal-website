import styles from './scan-lines.module.css';

export interface ScanLinesProps {
  opacity?: number;
  lineHeight?: number;
  animated?: boolean;
  className?: string;
}

export function ScanLines({
  opacity = 0.08,
  lineHeight = 2,
  animated = false,
  className,
}: ScanLinesProps) {
  const classNames = [
    styles.scanLines,
    animated ? styles.animated : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      aria-hidden="true"
      className={classNames}
      style={
        {
          '--scan-line-opacity': opacity,
          '--scan-line-height': `${lineHeight}px`,
        } as React.CSSProperties
      }
    />
  );
}
