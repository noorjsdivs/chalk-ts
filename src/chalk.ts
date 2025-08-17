import { ANSI_CODES, supportsColor } from "./ansi";
import { rgb, hex, hsl, COLORS } from "./colors";

/**
 * Styling function type
 */
export type StyleFunction = (text: string) => string;

/**
 * Template function type for template literals
 */
export type TemplateFunction = (
  template: TemplateStringsArray,
  ...substitutions: unknown[]
) => string;

/**
 * Main ChalkTS class with all styling capabilities
 */
export class ChalkTS {
  private readonly colorEnabled: boolean;

  constructor(enabled?: boolean) {
    this.colorEnabled = enabled ?? supportsColor();
  }

  /**
   * Apply ANSI codes to text
   */
  private apply(codes: string[], text: string): string {
    if (!this.colorEnabled) return String(text);
    if (text == null) return String(text);
    if (text === "") return text;
    return codes.join("") + text + ANSI_CODES.reset;
  }

  /**
   * Create a new instance with color support disabled
   */
  get disabled(): ChalkTS {
    return new ChalkTS(false);
  }

  /**
   * Create a new instance with color support enabled
   */
  get enabled(): ChalkTS {
    return new ChalkTS(true);
  }

  // Text styles
  get bold(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bold]);
  }

  get dim(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.dim]);
  }

  get italic(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.italic]);
  }

  get underline(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.underline]);
  }

  get blink(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.blink]);
  }

  get inverse(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.inverse]);
  }

  get hidden(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.hidden]);
  }

  get strikethrough(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.strikethrough]);
  }

  // Foreground colors
  get black(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.black]);
  }

  get red(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.red]);
  }

  get green(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.green]);
  }

  get yellow(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.yellow]);
  }

  get blue(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.blue]);
  }

  get magenta(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.magenta]);
  }

  get cyan(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.cyan]);
  }

  get white(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.white]);
  }

  get gray(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.gray]);
  }

  get grey(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.grey]);
  }

  // Bright foreground colors
  get redBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.redBright]);
  }

  get greenBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.greenBright]);
  }

  get yellowBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.yellowBright]);
  }

  get blueBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.blueBright]);
  }

  get magentaBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.magentaBright]);
  }

  get cyanBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.cyanBright]);
  }

  get whiteBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.whiteBright]);
  }

  // Background colors
  get bgBlack(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgBlack]);
  }

  get bgRed(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgRed]);
  }

  get bgGreen(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgGreen]);
  }

  get bgYellow(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgYellow]);
  }

  get bgBlue(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgBlue]);
  }

  get bgMagenta(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgMagenta]);
  }

  get bgCyan(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgCyan]);
  }

  get bgWhite(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgWhite]);
  }

  get bgGray(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgGray]);
  }

  get bgGrey(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgGrey]);
  }

  // Bright background colors
  get bgRedBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgRedBright]);
  }

  get bgGreenBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgGreenBright]);
  }

  get bgYellowBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgYellowBright]);
  }

  get bgBlueBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgBlueBright]);
  }

  get bgMagentaBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgMagentaBright]);
  }

  get bgCyanBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgCyanBright]);
  }

  get bgWhiteBright(): ChalkTS & StyleFunction {
    return this.createStyler([ANSI_CODES.bgWhiteBright]);
  }

  // Advanced color methods
  rgb(r: number, g: number, b: number): ChalkTS & StyleFunction {
    return this.createStyler([rgb(r, g, b)]);
  }

  bgRgb(r: number, g: number, b: number): ChalkTS & StyleFunction {
    return this.createStyler([rgb(r, g, b, true)]);
  }

  hex(color: string): ChalkTS & StyleFunction {
    return this.createStyler([hex(color)]);
  }

  bgHex(color: string): ChalkTS & StyleFunction {
    return this.createStyler([hex(color, true)]);
  }

  hsl(h: number, s: number, l: number): ChalkTS & StyleFunction {
    return this.createStyler([hsl(h, s, l)]);
  }

  bgHsl(h: number, s: number, l: number): ChalkTS & StyleFunction {
    return this.createStyler([hsl(h, s, l, true)]);
  }

  // Extended color palette
  get orange(): ChalkTS & StyleFunction {
    const color = COLORS.orange;
    return this.createStyler([rgb(color.r, color.g, color.b)]);
  }

  get purple(): ChalkTS & StyleFunction {
    const color = COLORS.purple;
    return this.createStyler([rgb(color.r, color.g, color.b)]);
  }

  get pink(): ChalkTS & StyleFunction {
    const color = COLORS.pink;
    return this.createStyler([rgb(color.r, color.g, color.b)]);
  }

  get brown(): ChalkTS & StyleFunction {
    const color = COLORS.brown;
    return this.createStyler([rgb(color.r, color.g, color.b)]);
  }

  get lime(): ChalkTS & StyleFunction {
    const color = COLORS.lime;
    return this.createStyler([rgb(color.r, color.g, color.b)]);
  }

  get indigo(): ChalkTS & StyleFunction {
    const color = COLORS.indigo;
    return this.createStyler([rgb(color.r, color.g, color.b)]);
  }

  get violet(): ChalkTS & StyleFunction {
    const color = COLORS.violet;
    return this.createStyler([rgb(color.r, color.g, color.b)]);
  }

  get turquoise(): ChalkTS & StyleFunction {
    return this.createStyler([rgb(64, 224, 208)]);
  }

  get gold(): ChalkTS & StyleFunction {
    return this.createStyler([rgb(255, 215, 0)]);
  }

  get silver(): ChalkTS & StyleFunction {
    return this.createStyler([rgb(192, 192, 192)]);
  }

  // Utility methods
  strip(text: string): string {
    // Remove all ANSI escape sequences
    return text.replace(/\u001B\[[0-9;]*m/g, "");
  }

  length(text: string): number {
    return this.strip(text).length;
  }

  // Template literal support
  template(
    template: TemplateStringsArray,
    ...substitutions: unknown[]
  ): string {
    let result = "";
    for (let i = 0; i < template.length; i++) {
      result += template[i];
      if (i < substitutions.length) {
        result += String(substitutions[i]);
      }
    }
    return result;
  }

  /**
   * Create a styled function that can be chained
   */
  private createStyler(codes: string[]): ChalkTS & StyleFunction {
    const styler = (text: string) => this.apply(codes, text);

    // Create a new ChalkTS instance with accumulated codes
    const newChalk = new ChalkTS(this.colorEnabled);

    // Copy all properties and methods to the styler function
    Object.setPrototypeOf(styler, newChalk);
    Object.assign(styler, newChalk);

    // Override the createStyler method to accumulate codes
    (styler as any).createStyler = (newCodes: string[]) => {
      return this.createStyler([...codes, ...newCodes]);
    };

    return styler as ChalkTS & StyleFunction;
  }
}

/**
 * Default instance
 */
export const chalkTs = new ChalkTS();

/**
 * Export individual color functions for convenience
 */
export const {
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
} = chalkTs;
