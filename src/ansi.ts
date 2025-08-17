/**
 * ANSI color and style codes
 */
export const ANSI_CODES = {
  // Reset
  reset: '\u001B[0m',

  // Text styles
  bold: '\u001B[1m',
  dim: '\u001B[2m',
  italic: '\u001B[3m',
  underline: '\u001B[4m',
  blink: '\u001B[5m',
  inverse: '\u001B[7m',
  hidden: '\u001B[8m',
  strikethrough: '\u001B[9m',

  // Foreground colors
  black: '\u001B[30m',
  red: '\u001B[31m',
  green: '\u001B[32m',
  yellow: '\u001B[33m',
  blue: '\u001B[34m',
  magenta: '\u001B[35m',
  cyan: '\u001B[36m',
  white: '\u001B[37m',
  gray: '\u001B[90m',
  grey: '\u001B[90m',

  // Bright foreground colors
  redBright: '\u001B[91m',
  greenBright: '\u001B[92m',
  yellowBright: '\u001B[93m',
  blueBright: '\u001B[94m',
  magentaBright: '\u001B[95m',
  cyanBright: '\u001B[96m',
  whiteBright: '\u001B[97m',

  // Background colors
  bgBlack: '\u001B[40m',
  bgRed: '\u001B[41m',
  bgGreen: '\u001B[42m',
  bgYellow: '\u001B[43m',
  bgBlue: '\u001B[44m',
  bgMagenta: '\u001B[45m',
  bgCyan: '\u001B[46m',
  bgWhite: '\u001B[47m',
  bgGray: '\u001B[100m',
  bgGrey: '\u001B[100m',

  // Bright background colors
  bgRedBright: '\u001B[101m',
  bgGreenBright: '\u001B[102m',
  bgYellowBright: '\u001B[103m',
  bgBlueBright: '\u001B[104m',
  bgMagentaBright: '\u001B[105m',
  bgCyanBright: '\u001B[106m',
  bgWhiteBright: '\u001B[107m',
} as const;

/**
 * Check if colors are supported in the current environment
 */
export function supportsColor(): boolean {
  if (typeof process === 'undefined') return false;
  
  const { env, platform, stdout } = process;
  
  // Force color support
  if (env.FORCE_COLOR === '1' || env.FORCE_COLOR === 'true') return true;
  if (env.FORCE_COLOR === '0' || env.FORCE_COLOR === 'false') return false;
  
  // No color support
  if (env.NO_COLOR || env.NODE_DISABLE_COLORS) return false;
  
  // CI environments
  if (env.CI && !env.GITHUB_ACTIONS) return false;
  
  // Terminal capabilities
  if (platform === 'win32') {
    return !!(env.TERM && env.TERM !== 'dumb');
  }
  
  if (!stdout || !stdout.isTTY) return false;
  
  const term = env.TERM?.toLowerCase();
  if (term === 'dumb') return false;
  
  return !!(
    term &&
    (term.includes('color') ||
      term.includes('256') ||
      term.includes('ansi') ||
      term === 'xterm' ||
      term === 'screen' ||
      term === 'vt100' ||
      env.COLORTERM)
  );
}

/**
 * Get color level support (0: no color, 1: basic, 2: 256 colors, 3: 16m colors)
 */
export function getColorLevel(): 0 | 1 | 2 | 3 {
  if (!supportsColor()) return 0;
  
  const { env } = process;
  
  if (env.COLORTERM === 'truecolor' || env.TERM === 'xterm-256color') return 3;
  if (env.TERM?.includes('256')) return 2;
  
  return 1;
}
