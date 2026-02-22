export const theme = {
  colors: {
    background: '#0a0a0a',
    surface: '#141414',
    border: '#2a2a2a',
    textPrimary: '#e0e0e0',
    textSecondary: '#888888',
    accent: '#5a8f8f',
    glitchCyan: '#00ffff',
    glitchMagenta: '#ff00ff',
  },
} as const;

export type ThemeColors = typeof theme.colors;
