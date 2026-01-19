import { ChalkTS, Level } from "./chalk";
import { hexToRgb } from "./colors";

/**
 * Gradient options
 */
export interface GradientOptions {
  interpolation?: "rgb"; // Extendable to HSL later
  level?: Level;
}

/**
 * Apply linear gradient to text
 */
export function gradient(
  text: string,
  colors: string[],
  options: GradientOptions = {},
): string {
  if (!text || colors.length < 2) return text;

  const rgbColors = colors.map((c) => hexToRgb(c));
  // If any color is invalid, return original text
  if (rgbColors.some((c) => c === null)) return text;

  const stops = rgbColors as { r: number; g: number; b: number }[];
  const steps = text.length;
  let result = "";

  const chalk =
    options.level !== undefined
      ? new ChalkTS({ level: options.level })
      : new ChalkTS();

  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1 || 1);

    // Find which segment we are in
    // For N colors, we have N-1 segments.
    // Segment index = floor(t * (N-1))
    const segmentCount = stops.length - 1;
    const segmentIndex = Math.min(
      Math.floor(t * segmentCount),
      segmentCount - 1,
    );
    const segmentT = t * segmentCount - segmentIndex;

    const start = stops[segmentIndex]!;
    const end = stops[segmentIndex + 1]!;

    const r = Math.round(start.r + (end.r - start.r) * segmentT);
    const g = Math.round(start.g + (end.g - start.g) * segmentT);
    const b = Math.round(start.b + (end.b - start.b) * segmentT);

    result += chalk.rgb(r, g, b)(text[i]!);
  }

  return result;
}
