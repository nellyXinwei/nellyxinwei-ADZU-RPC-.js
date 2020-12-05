const READLINE = require('readline');

const ASK = READLINE.createInterface({
  input:process.stdin,
  output: process.stdout
});

ASK.question("What is your name?", (name) => {
  console.log(`Your name is ${name}`);
})