const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) + 1 === input.length) {
    rl.close();
  }
});

rl.on("close", () => {
  input
    .slice(1)
    .forEach((item) => console.log(item[0] + item[item.length - 1]));
});
