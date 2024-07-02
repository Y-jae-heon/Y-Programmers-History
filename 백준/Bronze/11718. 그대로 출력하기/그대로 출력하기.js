const readline = require("readline");

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => console.log(line));
