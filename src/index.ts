/**
 * 🎨 ChalkTS - Modern terminal string styling library
 * 
 * A powerful, TypeScript-first alternative to chalk with enhanced features,
 * better performance, and modern development experience.
 * 
 * @version 1.0.0
 * @author Noor Mohammad
 * @repository https://github.com/noorjsdivs/chalk-ts
 */

// Core exports
export { ChalkTS, chalkTs as default } from './chalk';
export * from './ansi';
export * from './colors';
export * from './effects';

// Convenience exports for individual styling functions
export {
  bold,
  dim,
  italic,
  underline,
  blink,
  inverse,
  hidden,
  strikethrough,
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  gray,
  grey,
  redBright,
  greenBright,
  yellowBright,
  blueBright,
  magentaBright,
  cyanBright,
  whiteBright,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  bgGray,
  bgGrey,
  bgRedBright,
  bgGreenBright,
  bgYellowBright,
  bgBlueBright,
  bgMagentaBright,
  bgCyanBright,
  bgWhiteBright,
  orange,
  purple,
  pink,
  brown,
  lime,
  indigo,
  violet,
  turquoise,
  gold,
  silver,
} from './chalk';

// Re-export the default instance as a named export
export { chalkTs as chalk } from './chalk';

// Type exports
export type { StyleFunction, TemplateFunction } from './chalk';
export type { RGB, HSL } from './colors';
