import { ChalkTS } from "./chalk";

/**
 * Advanced styling utilities and effects
 */

/**
 * Create a gradient effect between two colors
 */
export function gradient(
  text: string,
  startColor: string,
  endColor: string
): string {
  if (text.length === 0) return text;

  const chalk = new ChalkTS();

  // Parse hex colors
  const parseHex = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result && result.length >= 4
      ? {
          r: parseInt(result[1]!, 16),
          g: parseInt(result[2]!, 16),
          b: parseInt(result[3]!, 16),
        }
      : null;
  };

  const start = parseHex(startColor);
  const end = parseHex(endColor);

  if (!start || !end) {
    throw new Error("Invalid hex colors provided");
  }

  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char) {
      const ratio = i / (text.length - 1);
      const r = Math.round(start.r + (end.r - start.r) * ratio);
      const g = Math.round(start.g + (end.g - start.g) * ratio);
      const b = Math.round(start.b + (end.b - start.b) * ratio);

      result += chalk.rgb(r, g, b)(char);
    }
  }

  return result;
}

/**
 * Create a rainbow effect
 */
export function rainbow(text: string): string {
  if (text.length === 0) return text;

  const chalk = new ChalkTS();
  const colors: readonly [number, number, number][] = [
    [255, 0, 0], // Red
    [255, 127, 0], // Orange
    [255, 255, 0], // Yellow
    [0, 255, 0], // Green
    [0, 0, 255], // Blue
    [75, 0, 130], // Indigo
    [148, 0, 211], // Violet
  ] as const;

  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char) {
      const colorIndex = i % colors.length;
      const color = colors[colorIndex];
      if (color) {
        const [r, g, b] = color;
        result += chalk.rgb(r, g, b)(char);
      }
    }
  }

  return result;
}

/**
 * Create pulsing effect (alternating bright and dim)
 */
export function pulse(text: string, color = "white"): string {
  const chalk = new ChalkTS();
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (i % 2 === 0) {
      result += (chalk as any)[color].bold(char);
    } else {
      result += (chalk as any)[color].dim(char);
    }
  }

  return result;
}

/**
 * Create zebra stripes effect (alternating colors)
 */
export function zebra(text: string, color1 = "white", color2 = "gray"): string {
  const chalk = new ChalkTS();
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const color = i % 2 === 0 ? color1 : color2;
    result += (chalk as any)[color](char);
  }

  return result;
}

/**
 * Create a neon effect
 */
export function neon(text: string, color = "cyan"): string {
  const chalk = new ChalkTS();
  return (chalk as any)[color].bold.underline(text);
}

/**
 * Create a shadow effect
 */
export function shadow(
  text: string,
  color = "white",
  shadowColor = "gray"
): string {
  const chalk = new ChalkTS();
  const lines = text.split("\n");
  let result = "";

  for (let i = 0; i < lines.length; i++) {
    result += (chalk as any)[color](lines[i]);
    if (i < lines.length - 1) {
      result += "\n";
    }
  }

  // Add shadow line
  if (lines.length === 1) {
    result += "\n" + (chalk as any)[shadowColor].dim(" ".repeat(text.length));
  }

  return result;
}

/**
 * Create ASCII art box around text
 */
export function box(
  text: string,
  options: {
    padding?: number;
    color?: string;
    style?: "single" | "double" | "rounded" | "thick";
  } = {}
): string {
  const { padding = 1, color = "white", style = "single" } = options;
  const chalk = new ChalkTS();

  const styles = {
    single: {
      top: "─",
      bottom: "─",
      left: "│",
      right: "│",
      topLeft: "┌",
      topRight: "┐",
      bottomLeft: "└",
      bottomRight: "┘",
    },
    double: {
      top: "═",
      bottom: "═",
      left: "║",
      right: "║",
      topLeft: "╔",
      topRight: "╗",
      bottomLeft: "╚",
      bottomRight: "╝",
    },
    rounded: {
      top: "─",
      bottom: "─",
      left: "│",
      right: "│",
      topLeft: "╭",
      topRight: "╮",
      bottomLeft: "╰",
      bottomRight: "╯",
    },
    thick: {
      top: "━",
      bottom: "━",
      left: "┃",
      right: "┃",
      topLeft: "┏",
      topRight: "┓",
      bottomLeft: "┗",
      bottomRight: "┛",
    },
  };

  const chars = styles[style];
  const lines = text.split("\n");
  const maxLength = Math.max(...lines.map((line) => line.length));
  const width = maxLength + padding * 2;

  const topLine = (chalk as any)[color](
    chars.topLeft + chars.top.repeat(width) + chars.topRight
  );
  const bottomLine = (chalk as any)[color](
    chars.bottomLeft + chars.bottom.repeat(width) + chars.bottomRight
  );

  let result = topLine + "\n";

  // Add padding lines
  for (let i = 0; i < padding; i++) {
    result +=
      (chalk as any)[color](chars.left + " ".repeat(width) + chars.right) +
      "\n";
  }

  // Add content lines
  for (const line of lines) {
    const padLeft = " ".repeat(padding);
    const padRight = " ".repeat(width - line.length - padding);
    result +=
      (chalk as any)[color](chars.left) +
      padLeft +
      line +
      padRight +
      (chalk as any)[color](chars.right) +
      "\n";
  }

  // Add padding lines
  for (let i = 0; i < padding; i++) {
    result +=
      (chalk as any)[color](chars.left + " ".repeat(width) + chars.right) +
      "\n";
  }

  result += bottomLine;

  return result;
}

/**
 * Create a progress bar
 */
export function progressBar(
  progress: number,
  total: number,
  options: {
    width?: number;
    complete?: string;
    incomplete?: string;
    showPercentage?: boolean;
    color?: string;
  } = {}
): string {
  const {
    width = 20,
    complete = "█",
    incomplete = "░",
    showPercentage = true,
    color = "green",
  } = options;

  const chalk = new ChalkTS();
  const percentage = Math.min(100, Math.max(0, (progress / total) * 100));
  const completedWidth = Math.round((percentage / 100) * width);
  const remainingWidth = width - completedWidth;

  const bar =
    (chalk as any)[color](complete.repeat(completedWidth)) +
    chalk.gray(incomplete.repeat(remainingWidth));

  if (showPercentage) {
    return `${bar} ${percentage.toFixed(1)}%`;
  }

  return bar;
}

/**
 * Create a spinner animation frame
 */
export function spinner(frame: number, color = "cyan"): string {
  const chalk = new ChalkTS();
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const spinnerChar = frames[frame % frames.length];
  return (chalk as any)[color](spinnerChar);
}

/**
 * Create a table with colored headers and rows
 */
export function table(
  data: string[][],
  options: {
    headers?: string[];
    headerColor?: string;
    borderColor?: string;
    padding?: number;
  } = {}
): string {
  const {
    headers,
    headerColor = "cyan",
    borderColor = "gray",
    padding = 1,
  } = options;
  const chalk = new ChalkTS();

  if (data.length === 0) return "";

  const allRows = headers ? [headers, ...data] : data;
  const firstRow = allRows[0];
  if (!firstRow || firstRow.length === 0) return "";

  const columnWidths = firstRow.map((_, colIndex) =>
    Math.max(...allRows.map((row) => row[colIndex]?.length || 0))
  );

  let result = "";

  // Top border
  const topBorder = (chalk as any)[borderColor](
    "┌" + columnWidths.map((w) => "─".repeat(w + padding * 2)).join("┬") + "┐"
  );
  result += topBorder + "\n";

  // Headers
  if (headers) {
    const headerRow =
      "│" +
      headers
        .map((header, i) => {
          const width = columnWidths[i] || 0;
          const padded =
            " ".repeat(padding) + header.padEnd(width) + " ".repeat(padding);
          return (chalk as any)[headerColor].bold(padded);
        })
        .join((chalk as any)[borderColor]("│")) +
      (chalk as any)[borderColor]("│");
    result += headerRow + "\n";

    // Header separator
    const separator = (chalk as any)[borderColor](
      "├" + columnWidths.map((w) => "─".repeat(w + padding * 2)).join("┼") + "┤"
    );
    result += separator + "\n";
  }

  // Data rows
  const dataRows = headers ? data : allRows;
  dataRows.forEach((row) => {
    const tableRow =
      (chalk as any)[borderColor]("│") +
      row
        .map((cell, i) => {
          const width = columnWidths[i] || 0;
          const padded =
            " ".repeat(padding) +
            (cell || "").padEnd(width) +
            " ".repeat(padding);
          return padded;
        })
        .join((chalk as any)[borderColor]("│")) +
      (chalk as any)[borderColor]("│");
    result += tableRow + "\n";
  });

  // Bottom border
  const bottomBorder = (chalk as any)[borderColor](
    "└" + columnWidths.map((w) => "─".repeat(w + padding * 2)).join("┴") + "┘"
  );
  result += bottomBorder;

  return result;
}
