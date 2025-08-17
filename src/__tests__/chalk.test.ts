import { ChalkTS, chalkTs } from '../chalk';
import { supportsColor, ANSI_CODES } from '../ansi';

describe('ChalkTS', () => {
  let chalk: ChalkTS;

  beforeEach(() => {
    chalk = new ChalkTS(true); // Force enable colors for testing
  });

  describe('Basic styling', () => {
    test('should apply bold styling', () => {
      const result = chalk.bold('test');
      expect(result).toBe(`${ANSI_CODES.bold}test${ANSI_CODES.reset}`);
    });

    test('should apply italic styling', () => {
      const result = chalk.italic('test');
      expect(result).toBe(`${ANSI_CODES.italic}test${ANSI_CODES.reset}`);
    });

    test('should apply underline styling', () => {
      const result = chalk.underline('test');
      expect(result).toBe(`${ANSI_CODES.underline}test${ANSI_CODES.reset}`);
    });

    test('should apply strikethrough styling', () => {
      const result = chalk.strikethrough('test');
      expect(result).toBe(`${ANSI_CODES.strikethrough}test${ANSI_CODES.reset}`);
    });

    test('should apply dim styling', () => {
      const result = chalk.dim('test');
      expect(result).toBe(`${ANSI_CODES.dim}test${ANSI_CODES.reset}`);
    });
  });

  describe('Color styling', () => {
    test('should apply red color', () => {
      const result = chalk.red('test');
      expect(result).toBe(`${ANSI_CODES.red}test${ANSI_CODES.reset}`);
    });

    test('should apply green color', () => {
      const result = chalk.green('test');
      expect(result).toBe(`${ANSI_CODES.green}test${ANSI_CODES.reset}`);
    });

    test('should apply blue color', () => {
      const result = chalk.blue('test');
      expect(result).toBe(`${ANSI_CODES.blue}test${ANSI_CODES.reset}`);
    });

    test('should apply yellow color', () => {
      const result = chalk.yellow('test');
      expect(result).toBe(`${ANSI_CODES.yellow}test${ANSI_CODES.reset}`);
    });

    test('should apply magenta color', () => {
      const result = chalk.magenta('test');
      expect(result).toBe(`${ANSI_CODES.magenta}test${ANSI_CODES.reset}`);
    });

    test('should apply cyan color', () => {
      const result = chalk.cyan('test');
      expect(result).toBe(`${ANSI_CODES.cyan}test${ANSI_CODES.reset}`);
    });

    test('should apply white color', () => {
      const result = chalk.white('test');
      expect(result).toBe(`${ANSI_CODES.white}test${ANSI_CODES.reset}`);
    });

    test('should apply gray color', () => {
      const result = chalk.gray('test');
      expect(result).toBe(`${ANSI_CODES.gray}test${ANSI_CODES.reset}`);
    });
  });

  describe('Background colors', () => {
    test('should apply red background', () => {
      const result = chalk.bgRed('test');
      expect(result).toBe(`${ANSI_CODES.bgRed}test${ANSI_CODES.reset}`);
    });

    test('should apply green background', () => {
      const result = chalk.bgGreen('test');
      expect(result).toBe(`${ANSI_CODES.bgGreen}test${ANSI_CODES.reset}`);
    });

    test('should apply blue background', () => {
      const result = chalk.bgBlue('test');
      expect(result).toBe(`${ANSI_CODES.bgBlue}test${ANSI_CODES.reset}`);
    });
  });

  describe('Bright colors', () => {
    test('should apply bright red color', () => {
      const result = chalk.redBright('test');
      expect(result).toBe(`${ANSI_CODES.redBright}test${ANSI_CODES.reset}`);
    });

    test('should apply bright green color', () => {
      const result = chalk.greenBright('test');
      expect(result).toBe(`${ANSI_CODES.greenBright}test${ANSI_CODES.reset}`);
    });

    test('should apply bright blue background', () => {
      const result = chalk.bgBlueBright('test');
      expect(result).toBe(`${ANSI_CODES.bgBlueBright}test${ANSI_CODES.reset}`);
    });
  });

  describe('RGB colors', () => {
    test('should apply RGB color', () => {
      const result = chalk.rgb(255, 128, 0)('test');
      expect(result).toContain('test');
      expect(result).toContain('\u001B[38;2;255;128;0m');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should apply RGB background color', () => {
      const result = chalk.bgRgb(255, 128, 0)('test');
      expect(result).toContain('test');
      expect(result).toContain('\u001B[48;2;255;128;0m');
      expect(result).toContain(ANSI_CODES.reset);
    });
  });

  describe('HEX colors', () => {
    test('should apply HEX color', () => {
      const result = chalk.hex('#ff8000')('test');
      expect(result).toContain('test');
      expect(result).toContain('\u001B[38;2;255;128;0m');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should apply HEX background color', () => {
      const result = chalk.bgHex('#ff8000')('test');
      expect(result).toContain('test');
      expect(result).toContain('\u001B[48;2;255;128;0m');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should throw error for invalid HEX color', () => {
      expect(() => chalk.hex('invalid')('test')).toThrow('Invalid hex color: invalid');
    });
  });

  describe('HSL colors', () => {
    test('should apply HSL color', () => {
      const result = chalk.hsl(30, 100, 50)('test'); // Orange
      expect(result).toContain('test');
      expect(result).toContain('\u001B[38;2;');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should apply HSL background color', () => {
      const result = chalk.bgHsl(30, 100, 50)('test'); // Orange background
      expect(result).toContain('test');
      expect(result).toContain('\u001B[48;2;');
      expect(result).toContain(ANSI_CODES.reset);
    });
  });

  describe('Extended colors', () => {
    test('should apply orange color', () => {
      const result = chalk.orange('test');
      expect(result).toContain('test');
      expect(result).toContain('\u001B[38;2;255;165;0m');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should apply purple color', () => {
      const result = chalk.purple('test');
      expect(result).toContain('test');
      expect(result).toContain('\u001B[38;2;128;0;128m');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should apply pink color', () => {
      const result = chalk.pink('test');
      expect(result).toContain('test');
      expect(result).toContain('\u001B[38;2;255;192;203m');
      expect(result).toContain(ANSI_CODES.reset);
    });
  });

  describe('Method chaining', () => {
    test('should chain multiple styles', () => {
      const result = chalk.bold.red('test');
      expect(result).toContain(ANSI_CODES.bold);
      expect(result).toContain(ANSI_CODES.red);
      expect(result).toContain('test');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should chain style with background', () => {
      const result = chalk.bold.red.bgYellow('test');
      expect(result).toContain(ANSI_CODES.bold);
      expect(result).toContain(ANSI_CODES.red);
      expect(result).toContain(ANSI_CODES.bgYellow);
      expect(result).toContain('test');
      expect(result).toContain(ANSI_CODES.reset);
    });

    test('should chain multiple text styles', () => {
      const result = chalk.bold.italic.underline('test');
      expect(result).toContain(ANSI_CODES.bold);
      expect(result).toContain(ANSI_CODES.italic);
      expect(result).toContain(ANSI_CODES.underline);
      expect(result).toContain('test');
      expect(result).toContain(ANSI_CODES.reset);
    });
  });

  describe('Color support detection', () => {
    test('should detect color support', () => {
      const hasColors = supportsColor();
      expect(typeof hasColors).toBe('boolean');
    });

    test('should disable colors when specified', () => {
      const disabledChalk = new ChalkTS(false);
      const result = disabledChalk.red('test');
      expect(result).toBe('test');
    });

    test('should enable colors when specified', () => {
      const enabledChalk = new ChalkTS(true);
      const result = enabledChalk.red('test');
      expect(result).toBe(`${ANSI_CODES.red}test${ANSI_CODES.reset}`);
    });
  });

  describe('Utility methods', () => {
    test('should strip ANSI codes', () => {
      const styled = chalk.red.bold('test');
      const stripped = chalk.strip(styled);
      expect(stripped).toBe('test');
    });

    test('should calculate correct length', () => {
      const styled = chalk.red.bold('test');
      const length = chalk.length(styled);
      expect(length).toBe(4);
    });

    test('should handle empty strings', () => {
      const result = chalk.red('');
      expect(result).toBe('');
    });

    test('should handle null/undefined gracefully', () => {
      // @ts-expect-error Testing runtime behavior
      const result = chalk.red(null);
      expect(result).toBe('null');
    });
  });

  describe('Template literals', () => {
    test('should support template function', () => {
      const name = 'world';
      const result = chalk.template`Hello ${name}!`;
      expect(result).toBe('Hello world!');
    });
  });

  describe('Instance methods', () => {
    test('should create disabled instance', () => {
      const disabled = chalk.disabled;
      const result = disabled.red('test');
      expect(result).toBe('test');
    });

    test('should create enabled instance', () => {
      const enabled = chalk.enabled;
      const result = enabled.red('test');
      expect(result).toContain(ANSI_CODES.red);
    });
  });

  describe('Default export', () => {
    test('should work with default export', () => {
      const result = chalkTs.red('test');
      expect(result).toContain(ANSI_CODES.red);
      expect(result).toContain('test');
      expect(result).toContain(ANSI_CODES.reset);
    });
  });
});
