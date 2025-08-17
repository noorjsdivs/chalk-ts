/**
 * Color utilities for RGB, HSL, and HEX conversions
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

/**
 * Convert HEX color to RGB
 */
export function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result && result.length >= 4
    ? {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16),
      }
    : null;
}

/**
 * Convert RGB to HEX
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, c))).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Convert HSL to RGB
 */
export function hslToRgb(h: number, s: number, l: number): RGB {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Convert RGB to HSL
 */
export function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Generate RGB ANSI escape code
 */
export function rgb(
  r: number,
  g: number,
  b: number,
  background = false
): string {
  const prefix = background ? "48" : "38";
  return `\u001B[${prefix};2;${Math.round(r)};${Math.round(g)};${Math.round(
    b
  )}m`;
}

/**
 * Generate HEX ANSI escape code
 */
export function hex(color: string, background = false): string {
  const rgbColor = hexToRgb(color);
  if (!rgbColor) throw new Error(`Invalid hex color: ${color}`);
  return rgb(rgbColor.r, rgbColor.g, rgbColor.b, background);
}

/**
 * Generate HSL ANSI escape code
 */
export function hsl(
  h: number,
  s: number,
  l: number,
  background = false
): string {
  const rgbColor = hslToRgb(h, s, l);
  return rgb(rgbColor.r, rgbColor.g, rgbColor.b, background);
}

/**
 * Predefined color palette
 */
export const COLORS = {
  // Standard colors
  black: { r: 0, g: 0, b: 0 },
  red: { r: 255, g: 0, b: 0 },
  green: { r: 0, g: 255, b: 0 },
  yellow: { r: 255, g: 255, b: 0 },
  blue: { r: 0, g: 0, b: 255 },
  magenta: { r: 255, g: 0, b: 255 },
  cyan: { r: 0, g: 255, b: 255 },
  white: { r: 255, g: 255, b: 255 },

  // Extended colors
  orange: { r: 255, g: 165, b: 0 },
  purple: { r: 128, g: 0, b: 128 },
  pink: { r: 255, g: 192, b: 203 },
  brown: { r: 165, g: 42, b: 42 },
  lime: { r: 0, g: 255, b: 0 },
  indigo: { r: 75, g: 0, b: 130 },
  violet: { r: 238, g: 130, b: 238 },
  turquoise: { r: 64, g: 224, b: 208 },
  gold: { r: 255, g: 215, b: 0 },
  silver: { r: 192, g: 192, b: 192 },
} as const;
