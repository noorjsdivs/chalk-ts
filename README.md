# 🎨 chalk-ts

<div align="center">
  <img src="https://res.cloudinary.com/duehd78sl/image/upload/v1755416064/npm-packages/chalk_z6fjpf.jpg" alt="chalk-ts Logo" width="400" />
</div>

<div align="center">

[![npm version](https://badge.fury.io/js/chalk-ts.svg)](https://badge.fury.io/js/chalk-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Test Coverage](https://img.shields.io/badge/coverage-98%25-brightgreen.svg)](https://github.com/noorjsdivs/chalk-ts)
[![YouTube](https://img.shields.io/badge/YouTube-ReactJS%20BD-red.svg?logo=youtube)](https://www.youtube.com/@reactjsBD)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-orange.svg?logo=buy-me-a-coffee)](https://buymeacoffee.com/reactbd)

</div>

> 🚀 **Modern terminal string styling library built with TypeScript**  
> A powerful, feature-rich alternative to chalk with enhanced capabilities, TrueColor support, visual effects, and modern development experience.

## ✨ Features

- 🎨 **Rich Color Support**: 20+ built-in colors, TrueColor (RGB/HEX/HSL)
- 🎭 **Advanced Effects**: Gradients, rainbow, pulse, neon, shadow, zebra stripes
- 🛠️ **Built-in Utilities**: Tables, progress bars, boxes, spinners
- 🎯 **Semantic Theming**: Create reusable theme configurations
- 🔒 **TypeScript First**: Full type safety with excellent IntelliSense
- 📦 **Zero Dependencies**: No external packages, minimal bundle size (~15KB)
- 🌳 **Tree Shakeable**: Import only what you need
- ⚡ **High Performance**: Optimized for speed and efficiency
- 🔧 **Easy Migration**: Drop-in replacement for most chalk usage
- 🌐 **Web Demo**: Interactive browser-based demo with live examples
- 📖 **Comprehensive Docs**: Extensive documentation and examples
- 🧪 **Well Tested**: 98%+ test coverage with 98 passing tests

## 🌐 Interactive Demo

Try out all features in your browser: **[Live Web Demo](https://www.reactbd.com/npm-packages/chalk-ts-typescript)**

The demo includes:

- ✅ All 20+ colors and backgrounds
- ✅ TrueColor (RGB/HEX/HSL) examples
- ✅ Visual effects (gradients, rainbow, neon, etc.)
- ✅ Utilities (boxes, tables, progress bars)
- ✅ Code snippets with copy functionality
- ✅ Live terminal output rendering

## 📦 Installation

```bash
npm install chalk-ts
```

```bash
yarn add chalk-ts
```

```bash
pnpm add chalk-ts
```

```bash
bun add chalk-ts
```

## 🚀 Quick Start

```typescript
import chalk from "chalk-ts";

// Basic colors
console.log(chalk.red("Hello World!"));
console.log(chalk.green.bold("Success message"));

// TrueColor support
console.log(chalk.rgb(255, 136, 0)("Custom RGB color"));
console.log(chalk.hex("#ff8800")("HEX color"));
console.log(chalk.hsl(30, 100, 50)("HSL color"));

// Method chaining
console.log(chalk.bold.red.bgYellow("Styled text"));

// Advanced effects
import { gradient, rainbow, box, createTheme } from "chalk-ts";

console.log(gradient("Gradient text!", ["#ff0000", "#00ff00", "#0000ff"]));
console.log(rainbow("Rainbow colors!"));
console.log(box("Boxed text"));

// Semantic theming
const theme = createTheme({
  info: chalk.blue.bold,
  success: chalk.green,
  error: chalk.red.bold,
});

console.log(theme.info("Info message"));
console.log(theme.success("Success!"));
console.log(theme.error("Error occurred"));
```

## 🎨 Basic Styling

### Text Styles

```typescript
import chalk from "chalk-ts";

console.log(chalk.bold("Bold text"));
console.log(chalk.italic("Italic text"));
console.log(chalk.underline("Underlined text"));
console.log(chalk.strikethrough("Strikethrough text"));
console.log(chalk.dim("Dimmed text"));
console.log(chalk.inverse("Inverted text"));
```

### Basic Colors

```typescript
// Foreground colors
console.log(chalk.black("Black text"));
console.log(chalk.red("Red text"));
console.log(chalk.green("Green text"));
console.log(chalk.yellow("Yellow text"));
console.log(chalk.blue("Blue text"));
console.log(chalk.magenta("Magenta text"));
console.log(chalk.cyan("Cyan text"));
console.log(chalk.white("White text"));
console.log(chalk.gray("Gray text"));

// Background colors
console.log(chalk.bgRed("Red background"));
console.log(chalk.bgGreen("Green background"));
console.log(chalk.bgBlue("Blue background"));
console.log(chalk.bgYellow("Yellow background"));

// Bright colors
console.log(chalk.redBright("Bright red"));
console.log(chalk.greenBright("Bright green"));
console.log(chalk.blueBright("Bright blue"));
console.log(chalk.yellowBright("Bright yellow"));
```

### Extended Color Palette

chalk-ts includes 20+ built-in colors beyond the standard ANSI colors:

```typescript
console.log(chalk.orange("Orange text"));
console.log(chalk.purple("Purple text"));
console.log(chalk.pink("Pink text"));
console.log(chalk.brown("Brown text"));
console.log(chalk.lime("Lime text"));
console.log(chalk.indigo("Indigo text"));
console.log(chalk.violet("Violet text"));
console.log(chalk.turquoise("Turquoise text"));
console.log(chalk.gold("Gold text"));
console.log(chalk.silver("Silver text"));
console.log(chalk.crimson("Crimson text"));
console.log(chalk.navy("Navy text"));
console.log(chalk.teal("Teal text"));
console.log(chalk.olive("Olive text"));
console.log(chalk.maroon("Maroon text"));
```

## 🌈 TrueColor Support

### RGB Colors (24-bit)

```typescript
// Foreground RGB
console.log(chalk.rgb(255, 136, 0)("Custom Orange"));
console.log(chalk.rgb(100, 200, 255)("Sky Blue"));

// Background RGB
console.log(chalk.bgRgb(255, 136, 0)("Orange background"));
console.log(chalk.bgRgb(100, 200, 255)("Sky blue background"));
```

### HEX Colors

```typescript
// Foreground HEX
console.log(chalk.hex("#ff8800")("Orange HEX"));
console.log(chalk.hex("#64c8ff")("Sky Blue HEX"));

// Background HEX
console.log(chalk.bgHex("#ff8800")("Orange background"));
console.log(chalk.bgHex("#64c8ff")("Sky blue background"));
```

### HSL Colors

```typescript
// Foreground HSL (Hue, Saturation, Lightness)
console.log(chalk.hsl(30, 100, 50)("Orange HSL"));
console.log(chalk.hsl(200, 100, 70)("Sky Blue HSL"));

// Background HSL
console.log(chalk.bgHsl(30, 100, 50)("Orange background"));
console.log(chalk.bgHsl(200, 100, 70)("Sky blue background"));
```

## 🎭 Visual Effects

### Gradient

Create beautiful gradient effects with multiple color stops:

```typescript
import { gradient } from "chalk-ts";

// Two-color gradient
console.log(gradient("Gradient Text!", ["#ff0000", "#0000ff"]));

// Multi-color gradient
console.log(gradient("Rainbow Gradient!", ["#ff0000", "#00ff00", "#0000ff"]));

// Fire effect
console.log(gradient("Fire Effect", ["#ff4500", "#ffd700"]));

// Ocean effect
console.log(gradient("Ocean Waves", ["#006994", "#00d4ff", "#7fffd4"]));
```

### Rainbow

Apply rainbow colors to text:

```typescript
import { rainbow } from "chalk-ts";

console.log(rainbow("Rainbow Colors!"));
console.log(rainbow("🌈 Colorful text 🌈"));
```

### Pulse

Create pulsing effects with alternating bright and dim:

```typescript
import { pulse } from "chalk-ts";

console.log(pulse("Pulsing text", "red"));
console.log(pulse("Attention!", "yellow"));
```

### Zebra Stripes

Alternate between two colors:

```typescript
import { zebra } from "chalk-ts";

console.log(zebra("Zebra effect", "red", "blue"));
console.log(zebra("Alternating colors!", "green", "yellow"));
```

### Neon Effect

Create glowing neon-style text:

```typescript
import { neon } from "chalk-ts";

console.log(neon("Neon text!", "cyan"));
console.log(neon("Glowing!", "magenta"));
console.log(neon("Electric!", "blue"));
```

### Shadow Effect

Add shadow to text:

```typescript
import { shadow } from "chalk-ts";

console.log(shadow("Text with shadow", "cyan", "gray"));
console.log(shadow("Depth effect", "yellow", "black"));
```

## 🛠️ Built-in Utilities

### Boxes

Create beautiful boxes around text with various styles:

```typescript
import { box } from "chalk-ts";

// Simple box
console.log(box("Hello World!"));

// Customized box
console.log(
  box("Fancy Box", {
    padding: 2,
    color: "cyan",
    style: "double",
  }),
);

// Different styles
console.log(box("Single Border", { style: "single" }));
console.log(box("Double Border", { style: "double" }));
console.log(box("Rounded Corners", { style: "rounded" }));
console.log(box("Thick Border", { style: "thick" }));

// Multi-line content
console.log(
  box("Line 1\nLine 2\nLine 3", {
    padding: 1,
    color: "green",
  }),
);
```

### Progress Bars

Create customizable progress indicators:

```typescript
import { progressBar } from "chalk-ts";

// Simple progress bar
console.log(progressBar(75, 100)); // 75% progress

// Customized progress bar
console.log(
  progressBar(50, 100, {
    width: 30,
    complete: "■",
    incomplete: "□",
    color: "green",
  }),
);

// Different styles
console.log(
  progressBar(80, 100, {
    complete: "█",
    incomplete: "░",
    color: "cyan",
  }),
);
```

### Tables

Create formatted tables with headers and custom styling:

```typescript
import { table } from "chalk-ts";

const data = [
  ["John Doe", "28", "Developer"],
  ["Jane Smith", "34", "Designer"],
  ["Bob Johnson", "45", "Manager"],
];

const headers = ["Name", "Age", "Role"];

// Table with headers
console.log(
  table(data, {
    headers,
    headerColor: "cyan",
    borderColor: "gray",
  }),
);

// Table without headers
console.log(table(data));

// Custom styling
console.log(
  table(data, {
    headers,
    headerColor: "yellow",
    borderColor: "blue",
  }),
);
```

### Spinners

Animated loading indicators:

```typescript
import { spinner } from "chalk-ts";

// Display different frames
for (let i = 0; i < 10; i++) {
  console.clear();
  console.log(spinner(i, "cyan") + " Loading...");
  await new Promise((resolve) => setTimeout(resolve, 100));
}

// Different colors
console.log(spinner(0, "green") + " Processing...");
console.log(spinner(1, "yellow") + " Working...");
console.log(spinner(2, "magenta") + " Please wait...");
```

## 🎯 Semantic Theming

Create reusable theme configurations for consistent styling:

```typescript
import { createTheme } from "chalk-ts";
import chalk from "chalk-ts";

// Define your theme
const theme = createTheme({
  info: chalk.blue.bold,
  success: chalk.green,
  warning: chalk.yellow.bold,
  error: chalk.red.bold.bgWhite,
  debug: chalk.gray.dim,
});

// Use the theme
console.log(theme.info("Application started"));
console.log(theme.success("✓ Task completed successfully"));
console.log(theme.warning("⚠ Warning: Low memory"));
console.log(theme.error("✗ Error: Connection failed"));
console.log(theme.debug("Debug: Variable value = 42"));

// Themes can use any chalk styling
const fancyTheme = createTheme({
  header: chalk.bold.underline.cyan,
  subheader: chalk.italic.blue,
  highlight: chalk.bgYellow.black.bold,
  muted: chalk.dim.gray,
});

console.log(fancyTheme.header("Main Title"));
console.log(fancyTheme.subheader("Subtitle"));
console.log(fancyTheme.highlight("Important!"));
console.log(fancyTheme.muted("Less important"));
```

## 🔗 Method Chaining

chalk-ts supports full method chaining for complex styling:

```typescript
// Combine multiple styles
console.log(chalk.bold.red.bgYellow("Complex styling"));

// Chain with TrueColor
console.log(chalk.bold.rgb(255, 100, 0).bgHex("#000000")("Custom chain"));

// Multiple text effects
console.log(chalk.bold.italic.underline.red("All effects"));

// Nested styling
console.log(
  chalk.blue("Blue text with " + chalk.red.bold("red bold") + " inside"),
);
```

## 🔧 Utility Methods

### Strip ANSI Codes

Remove styling from text:

```typescript
const styled = chalk.red.bold("Styled text");
const plain = chalk.strip(styled);
console.log(plain); // 'Styled text'
```

### Calculate Length

Get the actual text length without ANSI codes:

```typescript
const styled = chalk.red.bold("Hello");
console.log(styled.length); // Includes ANSI codes (e.g., 23)
console.log(chalk.length(styled)); // 5 (actual text length)
```

### Template Literals

Support for template strings with embedded styling:

```typescript
const name = "World";
const greeting = chalk.template`Hello {red.bold ${name}}!`;
console.log(greeting);

// More complex templates
const status = "success";
const message = chalk.template`Status: {green.bold ${status}} - All systems operational`;
console.log(message);
```

## 🎮 Color Level Control

Control color output levels for different environments:

```typescript
import { ChalkTS } from "chalk-ts";

// Level 0: No colors
const noColors = new ChalkTS({ level: 0 });
console.log(noColors.red("Plain text"));

// Level 1: Basic 16 colors
const basicColors = new ChalkTS({ level: 1 });
console.log(basicColors.red("Basic red"));

// Level 2: 256 colors
const extendedColors = new ChalkTS({ level: 2 });
console.log(extendedColors.rgb(255, 100, 0)("Downsampled to 256"));

// Level 3: TrueColor (16 million colors)
const trueColor = new ChalkTS({ level: 3 });
console.log(trueColor.rgb(255, 100, 0)("Full RGB"));

// Auto-detect (default)
import chalk from "chalk-ts";
console.log(chalk.red("Auto-detected color level"));
```

## 📊 Performance & Comparison

chalk-ts is designed for performance while providing more features:

| Library   | Bundle Size | Colors | Effects | Utilities | TypeScript | Tests |
| --------- | ----------- | ------ | ------- | --------- | ---------- | ----- |
| chalk-ts  | ~15KB       | 20+    | 6+      | 4+        | ⭐⭐⭐⭐⭐ | 98    |
| Chalk     | ~17KB       | 8      | 0       | 0         | ⭐⭐⭐⭐   | -     |
| Colorette | ~8KB        | 8      | 0       | 0         | ⭐⭐⭐     | -     |

### Why Choose chalk-ts?

1. **🎨 More Colors**: 20+ built-in colors + TrueColor support
2. **🎭 Visual Effects**: Gradients, rainbow, pulse, neon, shadow, zebra
3. **🛠️ Built-in Utilities**: Tables, progress bars, boxes, spinners
4. **🎯 Theming**: Semantic theme system for consistent styling
5. **🔒 Better Types**: Full TypeScript support with strict typing
6. **📦 Modern Build**: ES modules, tree-shaking, zero dependencies
7. **🧪 Well Tested**: 98%+ coverage with 98 passing tests
8. **📖 Great Docs**: Comprehensive documentation + interactive demo
9. **🔧 Easy Migration**: Drop-in replacement for chalk

## 🔄 Migration from Chalk

chalk-ts is designed as a drop-in replacement for chalk:

```typescript
// Before (chalk)
import chalk from "chalk";
console.log(chalk.red.bold("Hello"));

// After (chalk-ts) - same API!
import chalk from "chalk-ts";
console.log(chalk.red.bold("Hello"));

// Plus new features!
import { gradient, createTheme } from "chalk-ts";
console.log(gradient("Gradient!", ["#ff0000", "#0000ff"]));
```

Most chalk code will work without changes, but you'll get:

- ✅ 20+ additional colors
- ✅ TrueColor (RGB/HEX/HSL) support
- ✅ Visual effects (gradients, rainbow, etc.)
- ✅ Built-in utilities (tables, boxes, etc.)
- ✅ Semantic theming
- ✅ Better TypeScript support

## 📚 Complete API Reference

### Basic Colors

`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`

### Bright Colors

`redBright`, `greenBright`, `yellowBright`, `blueBright`, `magentaBright`, `cyanBright`, `whiteBright`

### Background Colors

`bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`, `bgGray`

### Bright Backgrounds

`bgRedBright`, `bgGreenBright`, `bgYellowBright`, `bgBlueBright`, `bgMagentaBright`, `bgCyanBright`, `bgWhiteBright`

### Extended Colors (20+)

`orange`, `purple`, `pink`, `brown`, `lime`, `indigo`, `violet`, `turquoise`, `gold`, `silver`, `crimson`, `navy`, `teal`, `olive`, `maroon`

### Text Styles

`bold`, `dim`, `italic`, `underline`, `blink`, `inverse`, `hidden`, `strikethrough`

### TrueColor Methods

- `rgb(r, g, b)` - Foreground RGB color
- `bgRgb(r, g, b)` - Background RGB color
- `hex(color)` - Foreground HEX color
- `bgHex(color)` - Background HEX color
- `hsl(h, s, l)` - Foreground HSL color
- `bgHsl(h, s, l)` - Background HSL color

### Utility Methods

- `strip(text)` - Remove ANSI codes from text
- `length(text)` - Get text length without ANSI codes
- `template` - Template literal support

### Visual Effects

- `gradient(text, colors[])` - Multi-color gradient
- `rainbow(text)` - Rainbow effect
- `pulse(text, color?)` - Pulsing effect
- `zebra(text, color1?, color2?)` - Alternating colors
- `neon(text, color?)` - Neon glow effect
- `shadow(text, color?, shadowColor?)` - Shadow effect

### Utilities

- `box(text, options?)` - Create bordered box
- `progressBar(current, total, options?)` - Progress indicator
- `spinner(frame, color?)` - Loading spinner
- `table(data, options?)` - Formatted table

### Theming

- `createTheme(config)` - Create semantic theme

## 🌟 Examples

### CLI Application

```typescript
import chalk from "chalk-ts";
import { box, progressBar, createTheme } from "chalk-ts";

const theme = createTheme({
  info: chalk.blue.bold,
  success: chalk.green.bold,
  error: chalk.red.bold,
});

console.log(
  box("My CLI App v1.0.0", {
    padding: 1,
    color: "cyan",
    style: "rounded",
  }),
);

console.log(theme.info("Starting installation..."));
console.log(progressBar(50, 100, { color: "cyan" }));
console.log(theme.success("✓ Installation complete!"));
```

### Log System

```typescript
import chalk from "chalk-ts";
import { createTheme } from "chalk-ts";

const logTheme = createTheme({
  debug: chalk.gray.dim,
  info: chalk.blue,
  warn: chalk.yellow.bold,
  error: chalk.red.bold.bgWhite,
  success: chalk.green.bold,
});

class Logger {
  debug(msg: string) {
    console.log(logTheme.debug(`[DEBUG] ${msg}`));
  }
  info(msg: string) {
    console.log(logTheme.info(`[INFO] ${msg}`));
  }
  warn(msg: string) {
    console.log(logTheme.warn(`[WARN] ${msg}`));
  }
  error(msg: string) {
    console.log(logTheme.error(`[ERROR] ${msg}`));
  }
  success(msg: string) {
    console.log(logTheme.success(`[SUCCESS] ${msg}`));
  }
}

const logger = new Logger();
logger.info("Application started");
logger.success("Connected to database");
logger.warn("High memory usage detected");
logger.error("Failed to load configuration");
```

### Data Visualization

```typescript
import { table, progressBar, gradient } from "chalk-ts";

// Sales report
const salesData = [
  ["Product A", "$1,234", "↑ 15%"],
  ["Product B", "$2,456", "↑ 23%"],
  ["Product C", "$987", "↓ 5%"],
];

console.log(gradient("SALES REPORT", ["#00d4ff", "#7fffd4"]));
console.log(
  table(salesData, {
    headers: ["Product", "Revenue", "Change"],
    headerColor: "cyan",
    borderColor: "gray",
  }),
);

console.log("\nQuarterly Progress:");
console.log(
  progressBar(75, 100, {
    width: 40,
    color: "green",
    complete: "█",
    incomplete: "░",
  }),
);
```

Check out more examples:

- [Complete Demo](./examples/demo.ts) - All features showcase
- [Web Demo](https://www.reactbd.com/npm-packages/chalk-ts-typescript) - Interactive browser demo

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

Run demo:

```bash
npm run demo
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Inspired by:

- [chalk](https://github.com/chalk/chalk) - The original terminal styling library
- Thanks to all contributors and the open source community

## 📞 Support

If you have any questions or need help, please:

- 🌐 **Homepage**: [reactbd.com/npm-packages/chalk-ts-typescript](https://www.reactbd.com/npm-packages/chalk-ts-typescript)
- 🎮 **Playground**: [chalk.reactbd.com](https://chalk.reactbd.com/)
- 📦 **NPM**: [npmjs.com/package/chalk-ts](https://www.npmjs.com/package/chalk-ts)
- 💻 **GitHub**: [github.com/noorjsdivs/chalk-ts](https://github.com/noorjsdivs/chalk-ts)
- 🐛 **Issues**: [GitHub Issues](https://github.com/noorjsdivs/chalk-ts/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/noorjsdivs/chalk-ts/discussions)
- 📧 **Email**: [dev.reactbd@gmail.com](mailto:dev.reactbd@gmail.com)
- 🎥 **YouTube**: [@reactjsBD](https://www.youtube.com/@reactjsBD)

## 🎉 Show Your Support

If this library helped you, please give it a ⭐️ on GitHub!

You can also support the development of this project by buying me a coffee:

<a href="https://buymeacoffee.com/reactbd" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

---

<div align="center">

[Made with ❤️ by Noor Mohammad](https://reactbd.com)

⭐ **Star this repo if you find it useful!**

</div>
