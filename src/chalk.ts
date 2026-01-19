import {
  ANSI_CODES,
  getColorLevel,
  rgbToAnsi256,
  rgbToAnsi16,
  AnsiCode,
} from "./ansi";
import { hexToRgb, hslToRgb, COLORS } from "./colors";

export type Level = 0 | 1 | 2 | 3;

export interface Options {
  level?: Level;
}

export interface Styling {
  open: string;
  close: string;
  closeRe: RegExp;
}

export type TemplateFunction = (
  template: TemplateStringsArray,
  ...substitutions: unknown[]
) => string;

export type StyleFunction = ((text: unknown) => string) & ChalkTS;

/**
 * Main ChalkTS class
 */
export class ChalkTS {
  private readonly _level: Level;
  private readonly _styles: Styling[];

  constructor(options: Options = {}) {
    this._level = options.level ?? getColorLevel();
    this._styles = [];
  }

  /**
   * Current color support level
   */
  get level(): Level {
    return this._level;
  }

  /**
   * Apply styles to text with nesting support
   */
  // @ts-ignore: used via dynamic access
  private _apply(text: string): string {
    if (this._level === 0 || !text) return text;

    let result = String(text);

    for (const style of this._styles.slice().reverse()) {
      const { open, close, closeRe } = style;
      if (result.includes(close)) {
        // Handle nesting: Replace the closing code with (Close + Open) to restart the style
        result = result.replace(closeRe, close + open);
      }
      result = open + result + close;
    }

    return result;
  }

  /**
   * Builder method for extending styles
   */
  private _builder(style: Styling): StyleFunction {
    const newStyles = [...this._styles, style];

    // Create the callable function
    const builder = ((text: unknown) => {
      // If called with template literal
      if (Array.isArray(text) && (text as any).raw) {
        return (builder as any)._apply(String(text));
      }
      return (builder as any)._apply(String(text));
    }) as StyleFunction;

    // Direct copy of properties to the function to allow chaining
    Object.setPrototypeOf(builder, ChalkTS.prototype);
    (builder as any)._level = this._level;
    (builder as any)._styles = newStyles;

    return builder;
  }

  // --- Modifiers ---

  get bold(): StyleFunction {
    return this._style("bold");
  }
  get dim(): StyleFunction {
    return this._style("dim");
  }
  get italic(): StyleFunction {
    return this._style("italic");
  }
  get underline(): StyleFunction {
    return this._style("underline");
  }
  get blink(): StyleFunction {
    return this._style("blink");
  }
  get inverse(): StyleFunction {
    return this._style("inverse");
  }
  get hidden(): StyleFunction {
    return this._style("hidden");
  }
  get strikethrough(): StyleFunction {
    return this._style("strikethrough");
  }

  // --- Foreground Colors ---

  get black(): StyleFunction {
    return this._style("black");
  }
  get red(): StyleFunction {
    return this._style("red");
  }
  get green(): StyleFunction {
    return this._style("green");
  }
  get yellow(): StyleFunction {
    return this._style("yellow");
  }
  get blue(): StyleFunction {
    return this._style("blue");
  }
  get magenta(): StyleFunction {
    return this._style("magenta");
  }
  get cyan(): StyleFunction {
    return this._style("cyan");
  }
  get white(): StyleFunction {
    return this._style("white");
  }
  get gray(): StyleFunction {
    return this._style("gray");
  }
  get grey(): StyleFunction {
    return this._style("grey");
  }
  get blackBright(): StyleFunction {
    return this._style("gray");
  } // Alias
  get redBright(): StyleFunction {
    return this._style("redBright");
  }
  get greenBright(): StyleFunction {
    return this._style("greenBright");
  }
  get yellowBright(): StyleFunction {
    return this._style("yellowBright");
  }
  get blueBright(): StyleFunction {
    return this._style("blueBright");
  }
  get magentaBright(): StyleFunction {
    return this._style("magentaBright");
  }
  get cyanBright(): StyleFunction {
    return this._style("cyanBright");
  }
  get whiteBright(): StyleFunction {
    return this._style("whiteBright");
  }

  // --- Background Colors ---

  get bgBlack(): StyleFunction {
    return this._style("bgBlack");
  }
  get bgRed(): StyleFunction {
    return this._style("bgRed");
  }
  get bgGreen(): StyleFunction {
    return this._style("bgGreen");
  }
  get bgYellow(): StyleFunction {
    return this._style("bgYellow");
  }
  get bgBlue(): StyleFunction {
    return this._style("bgBlue");
  }
  get bgMagenta(): StyleFunction {
    return this._style("bgMagenta");
  }
  get bgCyan(): StyleFunction {
    return this._style("bgCyan");
  }
  get bgWhite(): StyleFunction {
    return this._style("bgWhite");
  }
  get bgGray(): StyleFunction {
    return this._style("bgGray");
  }
  get bgGrey(): StyleFunction {
    return this._style("bgGrey");
  }
  get bgBlackBright(): StyleFunction {
    return this._style("bgGray");
  } // Alias
  get bgRedBright(): StyleFunction {
    return this._style("bgRedBright");
  }
  get bgGreenBright(): StyleFunction {
    return this._style("bgGreenBright");
  }
  get bgYellowBright(): StyleFunction {
    return this._style("bgYellowBright");
  }
  get bgBlueBright(): StyleFunction {
    return this._style("bgBlueBright");
  }
  get bgMagentaBright(): StyleFunction {
    return this._style("bgMagentaBright");
  }
  get bgCyanBright(): StyleFunction {
    return this._style("bgCyanBright");
  }
  get bgWhiteBright(): StyleFunction {
    return this._style("bgWhiteBright");
  }

  // --- Advanced Colors ---

  rgb(r: number, g: number, b: number): StyleFunction {
    if (this._level === 0)
      return this._builder({ open: "", close: "", closeRe: /$^/ });

    // Level 3: True Color
    if (this._level >= 3) {
      return this._builder({
        open: `\u001B[38;2;${r};${g};${b}m`,
        close: `\u001B[39m`,
        closeRe: /\u001B\[39m/g,
      });
    }

    // Level 2: ANSI 256
    if (this._level >= 2) {
      return this._builder({
        open: `\u001B[38;5;${rgbToAnsi256(r, g, b)}m`,
        close: `\u001B[39m`,
        closeRe: /\u001B\[39m/g,
      });
    }

    // Level 1: ANSI 16 (Downsampling)
    return this._builder({
      open: `\u001B[${rgbToAnsi16(r, g, b)}m`,
      close: `\u001B[39m`,
      closeRe: /\u001B\[39m/g,
    });
  }

  hex(hex: string): StyleFunction {
    const rgb = hexToRgb(hex);
    return rgb ? this.rgb(rgb.r, rgb.g, rgb.b) : this._empty();
  }

  hsl(h: number, s: number, l: number): StyleFunction {
    const rgb = hslToRgb(h, s, l);
    return this.rgb(rgb.r, rgb.g, rgb.b);
  }

  bgRgb(r: number, g: number, b: number): StyleFunction {
    if (this._level === 0)
      return this._builder({ open: "", close: "", closeRe: /$^/ });

    if (this._level >= 3) {
      return this._builder({
        open: `\u001B[48;2;${r};${g};${b}m`,
        close: `\u001B[49m`,
        closeRe: /\u001B\[49m/g,
      });
    }

    if (this._level >= 2) {
      return this._builder({
        open: `\u001B[48;5;${rgbToAnsi256(r, g, b)}m`,
        close: `\u001B[49m`,
        closeRe: /\u001B\[49m/g,
      });
    }

    return this._builder({
      open: `\u001B[${rgbToAnsi16(r, g, b, true)}m`,
      close: `\u001B[49m`,
      closeRe: /\u001B\[49m/g,
    });
  }

  bgHex(hex: string): StyleFunction {
    const rgb = hexToRgb(hex);
    return rgb ? this.bgRgb(rgb.r, rgb.g, rgb.b) : this._empty();
  }

  bgHsl(h: number, s: number, l: number): StyleFunction {
    const rgb = hslToRgb(h, s, l);
    return this.bgRgb(rgb.r, rgb.g, rgb.b);
  }

  // --- Extended Colors (using RGB) ---

  get orange(): StyleFunction {
    return this.rgb(255, 165, 0);
  }
  get purple(): StyleFunction {
    return this.rgb(128, 0, 128);
  }
  get pink(): StyleFunction {
    return this.rgb(255, 192, 203);
  }
  get brown(): StyleFunction {
    return this.rgb(165, 42, 42);
  }

  get lime(): StyleFunction {
    const color = COLORS.lime;
    return this.rgb(color.r, color.g, color.b);
  }

  get indigo(): StyleFunction {
    const color = COLORS.indigo;
    return this.rgb(color.r, color.g, color.b);
  }

  get violet(): StyleFunction {
    const color = COLORS.violet;
    return this.rgb(color.r, color.g, color.b);
  }

  get turquoise(): StyleFunction {
    const color = COLORS.turquoise;
    return this.rgb(color.r, color.g, color.b);
  }

  get gold(): StyleFunction {
    const color = COLORS.gold;
    return this.rgb(color.r, color.g, color.b);
  }

  get silver(): StyleFunction {
    const color = COLORS.silver;
    return this.rgb(color.r, color.g, color.b);
  }

  // --- Utilities ---

  strip(text: string): string {
    return text.replace(/\x1b\[[0-9;]*m/g, "");
  }

  length(text: string): number {
    return this.strip(text).length;
  }

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
    return (this as any)._apply(result);
  }

  /**
   * Helper to create a style from ANSI_CODES key
   */
  private _style(name: AnsiCode): StyleFunction {
    if (this._level === 0) return this._empty();

    const codes = ANSI_CODES[name];
    const openCode = Array.isArray(codes) ? codes[0] : codes;
    const closeCode = Array.isArray(codes) ? codes[1] : codes; // Should always be pair now

    return this._builder({
      open: `\u001B[${openCode}m`,
      close: `\u001B[${closeCode}m`,
      closeRe: new RegExp(`\\u001B\\[${closeCode}m`, "g"),
    });
  }

  private _empty(): StyleFunction {
    return this._builder({ open: "", close: "", closeRe: /$^/ });
  }
}

export const chalkTs = new ChalkTS();

// Export individual functions bound to the default instance
export const bold = chalkTs.bold;
export const dim = chalkTs.dim;
export const italic = chalkTs.italic;
export const underline = chalkTs.underline;
export const blink = chalkTs.blink;
export const inverse = chalkTs.inverse;
export const hidden = chalkTs.hidden;
export const strikethrough = chalkTs.strikethrough;

export const black = chalkTs.black;
export const red = chalkTs.red;
export const green = chalkTs.green;
export const yellow = chalkTs.yellow;
export const blue = chalkTs.blue;
export const magenta = chalkTs.magenta;
export const cyan = chalkTs.cyan;
export const white = chalkTs.white;
export const gray = chalkTs.gray;
export const grey = chalkTs.grey;
export const redBright = chalkTs.redBright;
export const greenBright = chalkTs.greenBright;
export const yellowBright = chalkTs.yellowBright;
export const blueBright = chalkTs.blueBright;
export const magentaBright = chalkTs.magentaBright;
export const cyanBright = chalkTs.cyanBright;
export const whiteBright = chalkTs.whiteBright;

export const bgBlack = chalkTs.bgBlack;
export const bgRed = chalkTs.bgRed;
export const bgGreen = chalkTs.bgGreen;
export const bgYellow = chalkTs.bgYellow;
export const bgBlue = chalkTs.bgBlue;
export const bgMagenta = chalkTs.bgMagenta;
export const bgCyan = chalkTs.bgCyan;
export const bgWhite = chalkTs.bgWhite;
export const bgGray = chalkTs.bgGray;
export const bgGrey = chalkTs.bgGrey;
export const bgRedBright = chalkTs.bgRedBright;
export const bgGreenBright = chalkTs.bgGreenBright;
export const bgYellowBright = chalkTs.bgYellowBright;
export const bgBlueBright = chalkTs.bgBlueBright;
export const bgMagentaBright = chalkTs.bgMagentaBright;
export const bgCyanBright = chalkTs.bgCyanBright;
export const bgWhiteBright = chalkTs.bgWhiteBright;

export const orange = chalkTs.orange;
export const purple = chalkTs.purple;
export const pink = chalkTs.pink;
export const brown = chalkTs.brown;
export const lime = chalkTs.lime;
export const indigo = chalkTs.indigo;
export const violet = chalkTs.violet;
export const turquoise = chalkTs.turquoise;
export const gold = chalkTs.gold;
export const silver = chalkTs.silver;
