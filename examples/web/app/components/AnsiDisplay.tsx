import React from "react";

// Minimal ANSI parser to handle standard SGR codes
function ansiToHtml(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\u001b\[([0-9;]*)m/g;
  let lastIndex = 0;
  let match;

  // Current style state
  let style: React.CSSProperties = {};

  const processCodes = (codes: string) => {
    if (!codes) return; // Empty code often means reset, but sometimes specific
    const sequence = codes.split(";").map(Number);

    for (let i = 0; i < sequence.length; i++) {
      const code = sequence[i];

      // Reset
      if (code === 0) style = {};
      // Modifiers
      else if (code === 1) style.fontWeight = "bold";
      else if (code === 2) style.opacity = 0.5;
      else if (code === 3) style.fontStyle = "italic";
      else if (code === 4) style.textDecoration = "underline";
      else if (code === 9) style.textDecoration = "line-through";
      // Reset Modifiers
      else if (code === 22) {
        delete style.fontWeight;
        delete style.opacity;
      } else if (code === 23) delete style.fontStyle;
      else if (code === 24) delete style.textDecoration;
      else if (code === 29)
        delete style.textDecoration; // Simplified
      // Foreground Basic
      else if (code >= 30 && code <= 37) {
        const colors = [
          "black",
          "red",
          "green",
          "yellow",
          "blue",
          "magenta",
          "cyan",
          "white",
        ];
        style.color = colors[code - 30];
      } else if (code === 39) delete style.color;
      // Background Basic
      else if (code >= 40 && code <= 47) {
        const colors = [
          "black",
          "red",
          "green",
          "yellow",
          "blue",
          "magenta",
          "cyan",
          "white",
        ];
        style.backgroundColor = colors[code - 40];
      } else if (code === 49) delete style.backgroundColor;
      // Bright Foreground
      else if (code >= 90 && code <= 97) {
        // Simple mapping, maybe adjust for "bright" appearance
        const colors = [
          "gray",
          "#fa8072",
          "#90ee90",
          "#ffffe0",
          "#add8e6",
          "#ffb6c1",
          "#e0ffff",
          "white",
        ];
        style.color = colors[code - 90];
      }

      // Bright Background
      else if (code >= 100 && code <= 107) {
        const colors = [
          "gray",
          "#fa8072",
          "#90ee90",
          "#ffffe0",
          "#add8e6",
          "#ffb6c1",
          "#e0ffff",
          "white",
        ];
        style.backgroundColor = colors[code - 100];
      }

      // 8-bit (256) and 24-bit (TrueColor)
      else if (code === 38 || code === 48) {
        const isFg = code === 38;
        const type = sequence[i + 1];

        if (type === 2) {
          // TrueColor: 38;2;r;g;b
          const r = sequence[i + 2];
          const g = sequence[i + 3];
          const b = sequence[i + 4];
          const colorString = `rgb(${r},${g},${b})`;
          if (isFg) style.color = colorString;
          else style.backgroundColor = colorString;
          i += 4; // Skip processed arguments
        } else if (type === 5) {
          // 256 color: 38;5;n - Simplified, ignoring for now or mapping if critical
          i += 2;
        }
      }
    }
  };

  while ((match = regex.exec(text)) !== null) {
    // Text before the code
    if (match.index > lastIndex) {
      const content = text.slice(lastIndex, match.index);
      parts.push(
        <span key={lastIndex} style={{ ...style }}>
          {content}
        </span>,
      );
    }

    // Process the code
    processCodes(match[1]);

    lastIndex = regex.lastIndex;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(
      <span key={lastIndex} style={{ ...style }}>
        {text.slice(lastIndex)}
      </span>,
    );
  }

  return parts;
}

export function AnsiDisplay({ output }: { output: string }) {
  if (!output) return null;

  return (
    <div className="w-full max-w-4xl p-6 bg-black rounded-lg border border-gray-800 shadow-xl overflow-hidden font-mono text-sm leading-relaxed">
      <div className="flex gap-2 mb-4 border-b border-gray-900 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-auto text-gray-500 text-xs">Server Output</span>
      </div>
      <pre className="whitespace-pre-wrap break-words text-gray-300">
        {output.split("\n").map((line, i) => (
          <div key={i} className="min-h-[1.2em]">
            {ansiToHtml(line)}
          </div>
        ))}
      </pre>
    </div>
  );
}
