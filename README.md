# 🎨 ChalkTS

<div align="center">
  <img src="https://res.cloudinary.com/duehd78sl/image/upload/v1755416064/npm-packages/chalk_z6fjpf.jpg" alt="ChalkTS Logo" width="400" />
</div>

<div align="center">

[![npm version](https://badge.fury.io/js/chalk-ts.svg)](https://badge.fury.io/js/chalk-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Test Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen.svg)](https://github.com/noorjsdivs/chalk-ts)
[![YouTube](https://img.shields.io/badge/YouTube-ReactJS%20BD-red.svg?logo=youtube)](https://www.youtube.com/@reactjsBD)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-orange.svg?logo=buy-me-a-coffee)](https://buymeacoffee.com/reactbd)

</div>

> 🚀 **Modern terminal string styling library built with TypeScript**  
> A powerful, feature-rich alternative to chalk with enhanced capabilities, better performance, and modern development experience.

## ✨ Features

- 🎨 **Rich Color Support**: 20+ built-in colors, RGB, HEX, HSL support
- 🎭 **Advanced Effects**: Gradient, rainbow, pulse, neon, shadow effects
- 🛠️ **Built-in Utilities**: Tables, progress bars, boxes, spinners
- 🔒 **TypeScript First**: Full type safety with excellent IntelliSense
- 📦 **Zero Dependencies**: No external packages, minimal bundle size
- 🌳 **Tree Shakeable**: Import only what you need
- ⚡ **High Performance**: Optimized for speed and efficiency
- 🔧 **Easy Migration**: Drop-in replacement for most chalk usage
- 📖 **Comprehensive Docs**: Extensive documentation and examples
- 🧪 **Well Tested**: 95%+ test coverage

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

## 🚀 Quick Start

```typescript
import chalkTs from "chalk-ts";

// Basic colors
console.log(chalkTs.red("Hello World!"));
console.log(chalkTs.green.bold("Success message"));

// Advanced colors
console.log(chalkTs.rgb(255, 136, 0)("Custom RGB color"));
console.log(chalkTs.hex("#ff8800")("HEX color"));
console.log(chalkTs.hsl(30, 100, 50)("HSL color"));

// Method chaining
console.log(chalkTs.bold.red.bgYellow("Styled text"));

// Advanced effects
import { gradient, rainbow, box } from "chalk-ts";

console.log(gradient("Gradient text!", "#ff0000", "#0000ff"));
console.log(rainbow("Rainbow colors!"));
console.log(box("Boxed text"));
```

## 🎨 Basic Styling

### Text Styles

```typescript
import chalkTs from "chalk-ts";

console.log(chalkTs.bold("Bold text"));
console.log(chalkTs.italic("Italic text"));
console.log(chalkTs.underline("Underlined text"));
console.log(chalkTs.strikethrough("Strikethrough text"));
console.log(chalkTs.dim("Dimmed text"));
console.log(chalkTs.inverse("Inverted text"));
```

### Basic Colors

```typescript
// Foreground colors
console.log(chalkTs.red("Red text"));
console.log(chalkTs.green("Green text"));
console.log(chalkTs.blue("Blue text"));
console.log(chalkTs.yellow("Yellow text"));
console.log(chalkTs.magenta("Magenta text"));
console.log(chalkTs.cyan("Cyan text"));
console.log(chalkTs.white("White text"));
console.log(chalkTs.gray("Gray text"));

// Background colors
console.log(chalkTs.bgRed("Red background"));
console.log(chalkTs.bgGreen("Green background"));
console.log(chalkTs.bgBlue("Blue background"));

// Bright colors
console.log(chalkTs.redBright("Bright red"));
console.log(chalkTs.greenBright("Bright green"));
console.log(chalkTs.blueBright("Bright blue"));
```

### Extended Color Palette

ChalkTS includes 20+ built-in colors beyond the standard ANSI colors:

```typescript
console.log(chalkTs.orange("Orange text"));
console.log(chalkTs.purple("Purple text"));
console.log(chalkTs.pink("Pink text"));
console.log(chalkTs.brown("Brown text"));
console.log(chalkTs.lime("Lime text"));
console.log(chalkTs.indigo("Indigo text"));
console.log(chalkTs.violet("Violet text"));
console.log(chalkTs.turquoise("Turquoise text"));
console.log(chalkTs.gold("Gold text"));
console.log(chalkTs.silver("Silver text"));
```

## 🌈 Advanced Colors

### RGB Colors

```typescript
// Foreground RGB
console.log(chalkTs.rgb(255, 136, 0)("Orange RGB"));

// Background RGB
console.log(chalkTs.bgRgb(255, 136, 0)("Orange background"));
```

### HEX Colors

```typescript
// Foreground HEX
console.log(chalkTs.hex("#ff8800")("Orange HEX"));

// Background HEX
console.log(chalkTs.bgHex("#ff8800")("Orange background"));
```

### HSL Colors

```typescript
// Foreground HSL
console.log(chalkTs.hsl(30, 100, 50)("Orange HSL"));

// Background HSL
console.log(chalkTs.bgHsl(30, 100, 50)("Orange background"));
```

## 🎭 Advanced Effects

### Gradient

Create beautiful gradient effects between two colors:

```typescript
import { gradient } from "chalk-ts";

console.log(gradient("Gradient Text!", "#ff0000", "#0000ff"));
console.log(gradient("Fire Effect", "#ff4500", "#ffd700"));
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
console.log(zebra("Alternating!", "green", "yellow"));
```

### Neon Effect

Create glowing neon-style text:

```typescript
import { neon } from "chalk-ts";

console.log(neon("Neon text!", "cyan"));
console.log(neon("Glowing!", "magenta"));
```

### Shadow Effect

Add shadow to text:

```typescript
import { shadow } from "chalk-ts";

console.log(shadow("Text with shadow", "cyan", "gray"));
```

## 🛠️ Built-in Utilities

### Boxes

Create beautiful boxes around text:

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
  })
);

// Different styles: 'single', 'double', 'rounded', 'thick'
console.log(box("Rounded", { style: "rounded" }));
```

### Progress Bars

Create progress indicators:

```typescript
import { progressBar } from "chalk-ts";

console.log(progressBar(75, 100)); // 75% progress
console.log(
  progressBar(50, 100, {
    width: 30,
    complete: "■",
    incomplete: "□",
    color: "green",
  })
);
```

### Tables

Create formatted tables:

```typescript
import { table } from "chalk-ts";

const data = [
  ["John", "25", "Engineer"],
  ["Jane", "30", "Designer"],
  ["Bob", "35", "Manager"],
];

const headers = ["Name", "Age", "Role"];

console.log(
  table(data, {
    headers,
    headerColor: "cyan",
    borderColor: "gray",
  })
);
```

### Spinners

Animated loading indicators:

```typescript
import { spinner } from "chalk-ts";

// Display different frames
for (let i = 0; i < 10; i++) {
  console.log(spinner(i, "cyan"));
}
```

## 🔗 Method Chaining

ChalkTS supports full method chaining for complex styling:

```typescript
// Combine multiple styles
console.log(chalkTs.bold.red.bgYellow("Complex styling"));

// Chain with custom colors
console.log(chalkTs.bold.rgb(255, 100, 0).bgHex("#000000")("Custom chain"));

// Multiple text effects
console.log(chalkTs.bold.italic.underline.red("All effects"));
```

## 🔧 Utilities

### Strip ANSI Codes

Remove styling from text:

```typescript
const styled = chalkTs.red.bold("Styled text");
const plain = chalkTs.strip(styled);
console.log(plain); // 'Styled text'
```

### Calculate Length

Get the actual text length without ANSI codes:

```typescript
const styled = chalkTs.red.bold("Hello");
console.log(styled.length); // Includes ANSI codes
console.log(chalkTs.length(styled)); // 5 (actual text length)
```

### Template Literals

Support for template strings:

```typescript
const name = "World";
console.log(chalkTs.template`Hello ${chalkTs.red(name)}!`);
```

### Color Detection

Control color output:

```typescript
import { ChalkTS } from "chalk-ts";

// Force disable colors
const noColors = new ChalkTS(false);
console.log(noColors.red("Plain text"));

// Force enable colors
const withColors = new ChalkTS(true);
console.log(withColors.red("Red text"));
```

## 📊 Performance Comparison

ChalkTS is designed for performance while providing more features:

| Library   | Bundle Size | Features   | Performance | TypeScript |
| --------- | ----------- | ---------- | ----------- | ---------- |
| ChalkTS   | ~15KB       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ |
| Chalk     | ~17KB       | ⭐⭐⭐     | ⭐⭐⭐⭐    | ⭐⭐⭐⭐   |
| Colorette | ~8KB        | ⭐⭐       | ⭐⭐⭐⭐⭐  | ⭐⭐⭐     |

### Why Choose ChalkTS?

1. **🎨 More Colors**: 20+ built-in colors vs 8 in most libraries
2. **🎭 More Effects**: Gradient, rainbow, pulse, neon, and more
3. **🛠️ More Utilities**: Tables, progress bars, boxes, spinners
4. **🔒 Better Types**: Full TypeScript support with strict typing
5. **📦 Modern Build**: ES modules, tree-shaking, zero dependencies
6. **🧪 Well Tested**: 95%+ test coverage
7. **📖 Great Docs**: Comprehensive documentation
8. **🔧 Easy Migration**: Drop-in replacement for chalk

## 🔄 Migration from Chalk

ChalkTS is designed as a drop-in replacement for chalk:

```typescript
// Before (chalk)
import chalk from "chalk";
console.log(chalk.red.bold("Hello"));

// After (chalk-ts)
import chalkTs from "chalk-ts";
console.log(chalkTs.red.bold("Hello"));
```

Most chalk code will work without changes, but you'll get additional features and better TypeScript support.

## 📚 API Reference

### Basic Colors

- `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`
- `redBright`, `greenBright`, `yellowBright`, `blueBright`, `magentaBright`, `cyanBright`, `whiteBright`

### Background Colors

- `bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`, `bgGray`
- `bgRedBright`, `bgGreenBright`, `bgYellowBright`, `bgBlueBright`, `bgMagentaBright`, `bgCyanBright`, `bgWhiteBright`

### Extended Colors

- `orange`, `purple`, `pink`, `brown`, `lime`, `indigo`, `violet`, `turquoise`, `gold`, `silver`

### Text Styles

- `bold`, `dim`, `italic`, `underline`, `blink`, `inverse`, `hidden`, `strikethrough`

### Advanced Methods

- `rgb(r, g, b)`, `bgRgb(r, g, b)`
- `hex(color)`, `bgHex(color)`
- `hsl(h, s, l)`, `bgHsl(h, s, l)`

### Utilities

- `strip(text)` - Remove ANSI codes
- `length(text)` - Get text length without ANSI codes
- `template` - Template literal support

### Effects

- `gradient(text, startColor, endColor)`
- `rainbow(text)`
- `pulse(text, color?)`
- `zebra(text, color1?, color2?)`
- `neon(text, color?)`
- `shadow(text, color?, shadowColor?)`
- `box(text, options?)`
- `progressBar(progress, total, options?)`
- `spinner(frame, color?)`
- `table(data, options?)`

## 🌟 Examples

Check out the [examples](./examples) directory for more comprehensive usage examples:

- [Basic Usage](./examples/demo.ts) - Complete feature demonstration
- [Performance Benchmark](./benchmarks/comparison.ts) - Performance comparison

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [chalk](https://github.com/chalk/chalk) - The original terminal styling library
- Thanks to all contributors and the open source community

## 📞 Support

- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/noorjsdivs/chalk-ts/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/noorjsdivs/chalk-ts/discussions)

---

Made with ❤️ by [Noor Mohammad](https://github.com/noorjsdivs)

⭐ Star this repo if you find it useful!
