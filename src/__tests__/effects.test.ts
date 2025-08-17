import {
  gradient,
  rainbow,
  pulse,
  zebra,
  neon,
  shadow,
  box,
  progressBar,
  spinner,
  table,
} from "../effects";

describe("Effects", () => {
  describe("gradient", () => {
    test("should create gradient between two colors", () => {
      const result = gradient("test", "#ff0000", "#0000ff");
      // Check that when ANSI codes are stripped, we get the original text
      const stripped = result.replace(/\x1b\[[0-9;]*m/g, "");
      expect(stripped).toBe("test");
      expect(result.length).toBeGreaterThan(4); // Should contain ANSI codes
    });

    test("should handle empty string", () => {
      const result = gradient("", "#ff0000", "#0000ff");
      expect(result).toBe("");
    });

    test("should throw error for invalid colors", () => {
      expect(() => gradient("test", "invalid", "#0000ff")).toThrow(
        "Invalid hex colors provided"
      );
      expect(() => gradient("test", "#ff0000", "invalid")).toThrow(
        "Invalid hex colors provided"
      );
    });
  });

  describe("rainbow", () => {
    test("should create rainbow effect", () => {
      const result = rainbow("hello");
      expect(result).toContain("h");
      expect(result).toContain("e");
      expect(result).toContain("l");
      expect(result).toContain("o");
      expect(result.length).toBeGreaterThan(5); // Should contain ANSI codes
    });

    test("should handle empty string", () => {
      const result = rainbow("");
      expect(result).toBe("");
    });
  });

  describe("pulse", () => {
    test("should create pulsing effect", () => {
      const result = pulse("test");
      const stripped = result.replace(/\x1b\[[0-9;]*m/g, "");
      expect(stripped).toBe("test");
      expect(result.length).toBeGreaterThan(4); // Should contain ANSI codes
    });

    test("should accept custom color", () => {
      const result = pulse("test", "red");
      const stripped = result.replace(/\x1b\[[0-9;]*m/g, "");
      expect(stripped).toBe("test");
      expect(result.length).toBeGreaterThan(4);
    });
  });

  describe("zebra", () => {
    test("should create zebra stripes", () => {
      const result = zebra("test");
      const stripped = result.replace(/\x1b\[[0-9;]*m/g, "");
      expect(stripped).toBe("test");
      expect(result.length).toBeGreaterThan(4); // Should contain ANSI codes
    });

    test("should accept custom colors", () => {
      const result = zebra("test", "red", "blue");
      const stripped = result.replace(/\x1b\[[0-9;]*m/g, "");
      expect(stripped).toBe("test");
      expect(result.length).toBeGreaterThan(4);
    });
  });

  describe("neon", () => {
    test("should create neon effect", () => {
      const result = neon("test");
      expect(result).toContain("test");
      expect(result.length).toBeGreaterThan(4); // Should contain ANSI codes
    });

    test("should accept custom color", () => {
      const result = neon("test", "magenta");
      expect(result).toContain("test");
      expect(result.length).toBeGreaterThan(4);
    });
  });

  describe("shadow", () => {
    test("should create shadow effect", () => {
      const result = shadow("test");
      expect(result).toContain("test");
      expect(result.split("\n")).toHaveLength(2); // Original text + shadow
    });

    test("should handle multiline text", () => {
      const result = shadow("line1\nline2");
      expect(result).toContain("line1");
      expect(result).toContain("line2");
      expect(result.split("\n").length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("box", () => {
    test("should create a box around text", () => {
      const result = box("test");
      expect(result).toContain("test");
      expect(result).toContain("┌");
      expect(result).toContain("┐");
      expect(result).toContain("└");
      expect(result).toContain("┘");
      expect(result).toContain("─");
      expect(result).toContain("│");
    });

    test("should accept custom options", () => {
      const result = box("test", {
        padding: 2,
        color: "red",
        style: "double",
      });
      expect(result).toContain("test");
      expect(result).toContain("╔");
      expect(result).toContain("╗");
      expect(result).toContain("╚");
      expect(result).toContain("╝");
    });

    test("should handle different box styles", () => {
      const rounded = box("test", { style: "rounded" });
      expect(rounded).toContain("╭");

      const thick = box("test", { style: "thick" });
      expect(thick).toContain("┏");
    });
  });

  describe("progressBar", () => {
    test("should create progress bar", () => {
      const result = progressBar(50, 100);
      expect(result).toContain("50.0%");
      expect(result).toContain("█");
      expect(result).toContain("░");
    });

    test("should handle 0% progress", () => {
      const result = progressBar(0, 100);
      expect(result).toContain("0.0%");
      expect(result).toContain("░");
    });

    test("should handle 100% progress", () => {
      const result = progressBar(100, 100);
      expect(result).toContain("100.0%");
      expect(result).toContain("█");
    });

    test("should accept custom options", () => {
      const result = progressBar(50, 100, {
        width: 10,
        complete: "■",
        incomplete: "□",
        showPercentage: false,
        color: "blue",
      });
      expect(result).not.toContain("%");
      expect(result).toContain("■");
      expect(result).toContain("□");
    });

    test("should handle values over 100%", () => {
      const result = progressBar(150, 100);
      expect(result).toContain("100.0%");
    });

    test("should handle negative values", () => {
      const result = progressBar(-10, 100);
      expect(result).toContain("0.0%");
    });
  });

  describe("spinner", () => {
    test("should return spinner frame", () => {
      const result = spinner(0);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    });

    test("should cycle through frames", () => {
      const frame1 = spinner(0);
      const frame2 = spinner(1);
      expect(frame1).not.toBe(frame2);
    });

    test("should handle large frame numbers", () => {
      const result = spinner(100);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    });

    test("should accept custom color", () => {
      const result = spinner(0, "red");
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("table", () => {
    test("should create table with headers", () => {
      const data = [
        ["John", "25", "Engineer"],
        ["Jane", "30", "Designer"],
      ];
      const headers = ["Name", "Age", "Job"];
      const result = table(data, { headers });

      expect(result).toContain("Name");
      expect(result).toContain("Age");
      expect(result).toContain("Job");
      expect(result).toContain("John");
      expect(result).toContain("Jane");
      expect(result).toContain("┌");
      expect(result).toContain("┐");
    });

    test("should create table without headers", () => {
      const data = [
        ["John", "25"],
        ["Jane", "30"],
      ];
      const result = table(data);

      expect(result).toContain("John");
      expect(result).toContain("Jane");
      expect(result).toContain("┌");
      expect(result).toContain("┐");
    });

    test("should handle empty data", () => {
      const result = table([]);
      expect(result).toBe("");
    });

    test("should accept custom options", () => {
      const data = [["test"]];
      const result = table(data, {
        headerColor: "green",
        borderColor: "blue",
        padding: 2,
      });

      expect(result).toContain("test");
      expect(result).toContain("┌");
    });
  });
});
