#!/usr/bin/env node

/**
 * ChalkTS Demo - Simple showcase using built package
 */

import chalkTs from "../dist/index.esm.js";

console.log("🎨 Welcome to ChalkTS Demo!\n");

// Basic styling
console.log("📝 Basic Text Styling:");
console.log(chalkTs.bold("Bold text"));
console.log(chalkTs.italic("Italic text"));
console.log(chalkTs.underline("Underlined text"));
console.log(chalkTs.strikethrough("Strikethrough text"));
console.log(chalkTs.dim("Dimmed text"));

// Colors
console.log("\n🌈 Colors:");
console.log(chalkTs.red("Red text"));
console.log(chalkTs.green("Green text"));
console.log(chalkTs.blue("Blue text"));
console.log(chalkTs.yellow("Yellow text"));
console.log(chalkTs.magenta("Magenta text"));
console.log(chalkTs.cyan("Cyan text"));

// Background colors
console.log("\n🎯 Background Colors:");
console.log(chalkTs.bgRed.white("White on red"));
console.log(chalkTs.bgGreen.black("Black on green"));
console.log(chalkTs.bgBlue.white("White on blue"));

// RGB and HEX colors
console.log("\n🎨 RGB & HEX Colors:");
console.log(chalkTs.rgb(255, 100, 100)("RGB color"));
console.log(chalkTs.hex("#ff6b6b")("HEX color"));

// Chaining
console.log("\n🔗 Method Chaining:");
console.log(chalkTs.red.bold.underline("Red, bold, and underlined"));
console.log(chalkTs.bgYellow.black.italic("Black italic on yellow"));

console.log("\n✨ ChalkTS Demo Complete!");
