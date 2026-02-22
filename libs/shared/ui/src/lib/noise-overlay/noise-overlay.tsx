export interface NoiseOverlayProps {
  opacity?: number;
  frequency?: number;
  className?: string;
}

export function NoiseOverlay({
  opacity = 0.03,
  frequency = 0.65,
  className,
}: NoiseOverlayProps) {
  return (
    <>
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0 }}
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={frequency}
            numOctaves={3}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        aria-hidden="true"
        className={className}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          opacity,
          filter: 'url(#noise-filter)',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
