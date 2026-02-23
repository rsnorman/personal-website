import { Vibrant } from 'node-vibrant/node';

const FALLBACK_COLOR = '#5a8f8f';

export async function extractDominantColor(imageUrl: string): Promise<string> {
  try {
    const palette = await Vibrant.from(imageUrl).getPalette();

    const swatch =
      palette.Vibrant ?? palette.DarkVibrant ?? palette.Muted;

    return swatch ? swatch.hex : FALLBACK_COLOR;
  } catch {
    return FALLBACK_COLOR;
  }
}
