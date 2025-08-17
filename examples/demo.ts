#!/usr/bin/env ts-node

/**
 * ChalkTS Demo - Showcase all features
 */

import chalkTs, { 
  ChalkTS, 
  gradient, 
  rainbow, 
  pulse, 
  zebra, 
  neon, 
  shadow, 
  box, 
  progressBar, 
  spinner, 
  table 
} from '../src/index';

console.log('🎨 Welcome to ChalkTS Demo!\n');

// Basic styling
console.log('📝 Basic Text Styling:');
console.log(chalkTs.bold('Bold text'));
console.log(chalkTs.italic('Italic text'));
console.log(chalkTs.underline('Underlined text'));
console.log(chalkTs.strikethrough('Strikethrough text'));
console.log(chalkTs.dim('Dimmed text'));
console.log(chalkTs.inverse('Inverted text'));
console.log('');

// Basic colors
console.log('🌈 Basic Colors:');
console.log(chalkTs.red('Red text'));
console.log(chalkTs.green('Green text'));
console.log(chalkTs.blue('Blue text'));
console.log(chalkTs.yellow('Yellow text'));
console.log(chalkTs.magenta('Magenta text'));
console.log(chalkTs.cyan('Cyan text'));
console.log(chalkTs.white('White text'));
console.log(chalkTs.gray('Gray text'));
console.log('');

// Background colors
console.log('🎯 Background Colors:');
console.log(chalkTs.bgRed.white(' Red background '));
console.log(chalkTs.bgGreen.black(' Green background '));
console.log(chalkTs.bgBlue.white(' Blue background '));
console.log(chalkTs.bgYellow.black(' Yellow background '));
console.log('');

// Bright colors
console.log('✨ Bright Colors:');
console.log(chalkTs.redBright('Bright red'));
console.log(chalkTs.greenBright('Bright green'));
console.log(chalkTs.blueBright('Bright blue'));
console.log(chalkTs.yellowBright('Bright yellow'));
console.log('');

// Extended colors
console.log('🎨 Extended Color Palette:');
console.log(chalkTs.orange('Orange text'));
console.log(chalkTs.purple('Purple text'));
console.log(chalkTs.pink('Pink text'));
console.log(chalkTs.brown('Brown text'));
console.log(chalkTs.lime('Lime text'));
console.log(chalkTs.indigo('Indigo text'));
console.log(chalkTs.violet('Violet text'));
console.log(chalkTs.turquoise('Turquoise text'));
console.log(chalkTs.gold('Gold text'));
console.log(chalkTs.silver('Silver text'));
console.log('');

// RGB colors
console.log('🌈 RGB Colors:');
console.log(chalkTs.rgb(255, 100, 50)('Custom RGB color (255, 100, 50)'));
console.log(chalkTs.bgRgb(100, 200, 255).black(' RGB Background (100, 200, 255) '));
console.log('');

// HEX colors
console.log('# HEX Colors:');
console.log(chalkTs.hex('#ff6b35')('HEX color #ff6b35'));
console.log(chalkTs.bgHex('#35ff6b').black(' HEX background #35ff6b '));
console.log('');

// HSL colors
console.log('🎨 HSL Colors:');
console.log(chalkTs.hsl(180, 100, 50)('HSL color (180, 100%, 50%)'));
console.log(chalkTs.bgHsl(60, 100, 75).black(' HSL background (60, 100%, 75%) '));
console.log('');

// Method chaining
console.log('🔗 Method Chaining:');
console.log(chalkTs.bold.red.bgYellow(' Bold Red text on Yellow background '));
console.log(chalkTs.italic.blue.underline('Italic Blue Underlined text'));
console.log(chalkTs.dim.green.strikethrough('Dim Green Strikethrough text'));
console.log('');

// Advanced effects
console.log('🎭 Advanced Effects:');
console.log('Gradient:', gradient('Hello Gradient!', '#ff0000', '#0000ff'));
console.log('Rainbow:', rainbow('Rainbow Colors!'));
console.log('Pulse:', pulse('Pulsing Text!', 'cyan'));
console.log('Zebra:', zebra('Zebra Stripes!', 'red', 'blue'));
console.log('Neon:', neon('Neon Effect!', 'magenta'));
console.log('');

// Shadow effect
console.log('👥 Shadow Effect:');
console.log(shadow('Text with Shadow', 'cyan', 'gray'));
console.log('');

// Box effects
console.log('📦 Box Effects:');
console.log(box('Simple Box'));
console.log('');
console.log(box('Fancy Box with Options', { 
  padding: 2, 
  color: 'cyan', 
  style: 'double' 
}));
console.log('');
console.log(box('Rounded Box', { style: 'rounded', color: 'green' }));
console.log('');

// Progress bars
console.log('📊 Progress Bars:');
console.log('Progress 25%:', progressBar(25, 100, { color: 'red' }));
console.log('Progress 50%:', progressBar(50, 100, { color: 'yellow' }));
console.log('Progress 75%:', progressBar(75, 100, { color: 'green' }));
console.log('Progress 100%:', progressBar(100, 100, { color: 'blue' }));
console.log('');

// Custom progress bar
console.log('Custom bar:', progressBar(60, 100, {
  width: 30,
  complete: '■',
  incomplete: '□',
  color: 'magenta'
}));
console.log('');

// Spinner animation frames
console.log('⏳ Spinner Frames:');
for (let i = 0; i < 10; i++) {
  process.stdout.write(`Frame ${i}: ${spinner(i, 'cyan')} `);
}
console.log('\n');

// Table demo
console.log('📋 Table Demo:');
const tableData = [
  ['John Doe', '28', 'Engineer', 'New York'],
  ['Jane Smith', '32', 'Designer', 'San Francisco'],
  ['Bob Johnson', '25', 'Developer', 'Austin'],
  ['Alice Brown', '29', 'Manager', 'Seattle']
];
const headers = ['Name', 'Age', 'Role', 'City'];
console.log(table(tableData, { 
  headers, 
  headerColor: 'cyan', 
  borderColor: 'gray',
  padding: 1 
}));
console.log('');

// Utility functions
console.log('🔧 Utility Functions:');
const styledText = chalkTs.red.bold.underline('Styled Text');
console.log('Original:', styledText);
console.log('Stripped:', chalkTs.strip(styledText));
console.log('Length with ANSI:', styledText.length);
console.log('Length without ANSI:', chalkTs.length(styledText));
console.log('');

// Template literals
console.log('📝 Template Support:');
const name = 'ChalkTS';
const version = '1.0.0';
console.log(chalkTs.template`Welcome to ${chalkTs.bold.blue(name)} version ${chalkTs.green(version)}!`);
console.log('');

// Disabled instance
console.log('❌ Disabled Colors (no ANSI codes):');
const disabledChalk = new ChalkTS(false);
console.log('Disabled red:', disabledChalk.red('This should be plain text'));
console.log('Disabled bold:', disabledChalk.bold('This should also be plain text'));
console.log('');

// Performance demo
console.log('⚡ Performance Demo:');
const start = Date.now();
for (let i = 0; i < 1000; i++) {
  chalkTs.red.bold(`Performance test ${i}`);
}
const end = Date.now();
console.log(`Styled 1000 strings in ${end - start}ms`);
console.log('');

// Complex chaining
console.log('🎯 Complex Styling Examples:');
console.log(chalkTs.bold.italic.underline.red.bgYellow(' All styles combined! '));
console.log(chalkTs.rgb(255, 100, 200).bold.italic('Custom RGB with styles'));
console.log(chalkTs.hex('#ff6b35').bgHex('#35ff6b').bold(' HEX color combination '));
console.log('');

// Error handling demo
console.log('🚨 Error Handling:');
try {
  chalkTs.hex('invalid-color')('This should throw an error');
} catch (error) {
  console.log(chalkTs.red('✓ Caught invalid hex color error:'), error.message);
}
console.log('');

console.log(chalkTs.bold.green('🎉 ChalkTS Demo Complete!'));
console.log(chalkTs.dim('Thank you for trying ChalkTS - The modern terminal styling library!'));
