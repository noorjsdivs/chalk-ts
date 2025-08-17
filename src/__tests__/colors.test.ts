import { hexToRgb, rgbToHex, hslToRgb, rgbToHsl, rgb, hex, hsl, COLORS } from '../colors';

describe('Colors', () => {
  describe('hexToRgb', () => {
    test('should convert hex to RGB', () => {
      const result = hexToRgb('#ff0000');
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('should convert hex without # to RGB', () => {
      const result = hexToRgb('ff0000');
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('should handle different colors', () => {
      expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 });
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    });

    test('should return null for invalid hex', () => {
      expect(hexToRgb('invalid')).toBeNull();
      expect(hexToRgb('#gggggg')).toBeNull();
      expect(hexToRgb('#ff')).toBeNull();
    });
  });

  describe('rgbToHex', () => {
    test('should convert RGB to hex', () => {
      const result = rgbToHex(255, 0, 0);
      expect(result).toBe('#ff0000');
    });

    test('should handle different colors', () => {
      expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
      expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
      expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
      expect(rgbToHex(0, 0, 0)).toBe('#000000');
    });

    test('should clamp values to 0-255 range', () => {
      expect(rgbToHex(-10, 300, 128)).toBe('#00ff80');
    });

    test('should handle decimal values', () => {
      expect(rgbToHex(255.7, 0.3, 128.9)).toBe('#ff0081');
    });
  });

  describe('hslToRgb', () => {
    test('should convert HSL to RGB', () => {
      const result = hslToRgb(0, 100, 50); // Red
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('should handle different colors', () => {
      expect(hslToRgb(120, 100, 50)).toEqual({ r: 0, g: 255, b: 0 }); // Green
      expect(hslToRgb(240, 100, 50)).toEqual({ r: 0, g: 0, b: 255 }); // Blue
    });

    test('should handle grayscale (saturation = 0)', () => {
      const result = hslToRgb(0, 0, 50);
      expect(result.r).toBe(result.g);
      expect(result.g).toBe(result.b);
      expect(result.r).toBeCloseTo(128, 0);
    });

    test('should handle edge cases', () => {
      expect(hslToRgb(0, 100, 0)).toEqual({ r: 0, g: 0, b: 0 }); // Black
      expect(hslToRgb(0, 100, 100)).toEqual({ r: 255, g: 255, b: 255 }); // White
    });
  });

  describe('rgbToHsl', () => {
    test('should convert RGB to HSL', () => {
      const result = rgbToHsl(255, 0, 0);
      expect(result.h).toBe(0);
      expect(result.s).toBe(100);
      expect(result.l).toBe(50);
    });

    test('should handle different colors', () => {
      const green = rgbToHsl(0, 255, 0);
      expect(green.h).toBe(120);
      expect(green.s).toBe(100);
      expect(green.l).toBe(50);

      const blue = rgbToHsl(0, 0, 255);
      expect(blue.h).toBe(240);
      expect(blue.s).toBe(100);
      expect(blue.l).toBe(50);
    });

    test('should handle grayscale', () => {
      const gray = rgbToHsl(128, 128, 128);
      expect(gray.h).toBe(0);
      expect(gray.s).toBe(0);
      expect(gray.l).toBeCloseTo(50, 0);
    });

    test('should handle black and white', () => {
      const black = rgbToHsl(0, 0, 0);
      expect(black.h).toBe(0);
      expect(black.s).toBe(0);
      expect(black.l).toBe(0);

      const white = rgbToHsl(255, 255, 255);
      expect(white.h).toBe(0);
      expect(white.s).toBe(0);
      expect(white.l).toBe(100);
    });
  });

  describe('rgb function', () => {
    test('should generate RGB ANSI code', () => {
      const result = rgb(255, 128, 0);
      expect(result).toBe('\u001B[38;2;255;128;0m');
    });

    test('should generate RGB background ANSI code', () => {
      const result = rgb(255, 128, 0, true);
      expect(result).toBe('\u001B[48;2;255;128;0m');
    });

    test('should round decimal values', () => {
      const result = rgb(255.7, 128.3, 0.9);
      expect(result).toBe('\u001B[38;2;256;128;1m');
    });
  });

  describe('hex function', () => {
    test('should generate HEX ANSI code', () => {
      const result = hex('#ff8000');
      expect(result).toBe('\u001B[38;2;255;128;0m');
    });

    test('should generate HEX background ANSI code', () => {
      const result = hex('#ff8000', true);
      expect(result).toBe('\u001B[48;2;255;128;0m');
    });

    test('should throw error for invalid hex', () => {
      expect(() => hex('invalid')).toThrow('Invalid hex color: invalid');
    });
  });

  describe('hsl function', () => {
    test('should generate HSL ANSI code', () => {
      const result = hsl(30, 100, 50); // Orange
      expect(result).toContain('\u001B[38;2;');
      expect(result).toContain('m');
    });

    test('should generate HSL background ANSI code', () => {
      const result = hsl(30, 100, 50, true); // Orange background
      expect(result).toContain('\u001B[48;2;');
      expect(result).toContain('m');
    });
  });

  describe('COLORS constant', () => {
    test('should contain standard colors', () => {
      expect(COLORS.red).toEqual({ r: 255, g: 0, b: 0 });
      expect(COLORS.green).toEqual({ r: 0, g: 255, b: 0 });
      expect(COLORS.blue).toEqual({ r: 0, g: 0, b: 255 });
      expect(COLORS.black).toEqual({ r: 0, g: 0, b: 0 });
      expect(COLORS.white).toEqual({ r: 255, g: 255, b: 255 });
    });

    test('should contain extended colors', () => {
      expect(COLORS.orange).toEqual({ r: 255, g: 165, b: 0 });
      expect(COLORS.purple).toEqual({ r: 128, g: 0, b: 128 });
      expect(COLORS.pink).toEqual({ r: 255, g: 192, b: 203 });
      expect(COLORS.brown).toEqual({ r: 165, g: 42, b: 42 });
      expect(COLORS.gold).toEqual({ r: 255, g: 215, b: 0 });
      expect(COLORS.silver).toEqual({ r: 192, g: 192, b: 192 });
    });

    test('should have all required color properties', () => {
      Object.values(COLORS).forEach(color => {
        expect(color).toHaveProperty('r');
        expect(color).toHaveProperty('g');
        expect(color).toHaveProperty('b');
        expect(typeof color.r).toBe('number');
        expect(typeof color.g).toBe('number');
        expect(typeof color.b).toBe('number');
        expect(color.r).toBeGreaterThanOrEqual(0);
        expect(color.r).toBeLessThanOrEqual(255);
        expect(color.g).toBeGreaterThanOrEqual(0);
        expect(color.g).toBeLessThanOrEqual(255);
        expect(color.b).toBeGreaterThanOrEqual(0);
        expect(color.b).toBeLessThanOrEqual(255);
      });
    });
  });
});
