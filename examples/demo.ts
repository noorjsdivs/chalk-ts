import { chalk, gradient, createTheme } from "../dist/index.esm.js";

console.log(chalk.bold.blue("Chalk-TS Demo"));
console.log("================\n");

// Basic Colors
console.log("Basic Colors:");
console.log(chalk.red("Red"), chalk.green("Green"), chalk.blue("Blue"));
console.log(
  chalk.yellow("Yellow"),
  chalk.magenta("Magenta"),
  chalk.cyan("Cyan"),
);
console.log(chalk.white("White"), chalk.gray("Gray"));
console.log("");

// Backgrounds
console.log("Backgrounds:");
console.log(
  chalk.bgRed.white(" Red BG "),
  chalk.bgGreen.black(" Green BG "),
  chalk.bgBlue.white(" Blue BG "),
);
console.log("");

// Modifiers
console.log("Modifiers:");
console.log(
  chalk.bold("Bold"),
  chalk.dim("Dim"),
  chalk.italic("Italic"),
  chalk.underline("Underline"),
);
console.log(chalk.strikethrough("Strikethrough"), chalk.inverse("Inverse"));
console.log("");

// Nesting
console.log("Nesting:");
console.log(
  chalk.blue(
    `I am blue, ${chalk.red.bold("blue inside red bold")}, and blue again!`,
  ),
);
console.log("");

// TrueColor
console.log("TrueColor (RGB/Hex):");
console.log(chalk.rgb(255, 136, 0).bold("Orange (RGB)"));
console.log(chalk.hex("#00ffcc").underline("Teal (Hex)"));
console.log("");

// Extended Colors
console.log("Extended Colors:");
console.log(
  chalk.orange("Orange"),
  chalk.purple("Purple"),
  chalk.pink("Pink"),
  chalk.lime("Lime"),
);
console.log(
  chalk.indigo("Indigo"),
  chalk.turquoise("Turquoise"),
  chalk.gold("Gold"),
  chalk.silver("Silver"),
);
console.log("");

// Gradients
console.log("Gradients:");
console.log(gradient("This is a gradient text", ["#ff0000", "#0000ff"]));
console.log(
  gradient("Multi-stop rainbow", [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ]),
);
console.log("");

// Themes
console.log("Theming:");
const theme = createTheme({
  info: chalk.blue.bold,
  warning: chalk.orange.underline,
  error: chalk.red.bold.bgWhite,
  success: chalk.green.bold,
});

console.log(theme.info("Info: using semantic styling"));
console.log(theme.warning("Warning: pay attention"));
console.log(theme.error("Error: something went wrong"));
console.log(theme.success("Success: task completed"));
console.log("");

console.log(chalk.bold.green("Demo Complete!"));
