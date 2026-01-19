import { ChalkTS, type StyleFunction } from "./chalk";

export type ThemeStyles<T extends string> = Record<
  T,
  StyleFunction | ((chalk: ChalkTS) => StyleFunction)
>;

export type ThemeType<T extends string> = {
  [K in T]: StyleFunction;
} & Theme<T>;

/**
 * Create a themed logger instance
 */
export class Theme<T extends string> {
  private styles: Record<T, StyleFunction>;

  constructor(styles: ThemeStyles<T>) {
    this.styles = {} as Record<T, StyleFunction>;

    const chalk = new ChalkTS();

    for (const key in styles) {
      const styleDef = styles[key];
      // Check if it's a ChalkTS instance (StyleFunction) using internal property
      if (typeof styleDef === "function" && !("_styles" in styleDef)) {
        // It's a builder function
        this.styles[key] = (styleDef as (chalk: ChalkTS) => StyleFunction)(
          chalk,
        );
      } else {
        // It's already a style function
        this.styles[key] = styleDef as StyleFunction;
      }
    }

    // Return a proxy to allow dynamic property access
    return new Proxy(this, {
      get: (target, prop: string | symbol) => {
        if (prop in target) {
          return (target as any)[prop];
        }
        if (typeof prop === "string" && prop in target.styles) {
          return target.styles[prop as T];
        }
        return undefined;
      },
    });
  }

  /**
   * Get the style function for a theme key
   */
  get(key: T): StyleFunction {
    return (
      this.styles[key] || (((text: unknown) => String(text)) as StyleFunction)
    );
  }

  /**
   * Apply a theme style directly
   */
  style(key: T, text: string): string {
    return this.get(key)(text);
  }
}

/**
 * Helper to create a theme
 */
export function createTheme<T extends string>(
  styles: ThemeStyles<T>,
): ThemeType<T> {
  return new Theme(styles) as unknown as ThemeType<T>;
}
