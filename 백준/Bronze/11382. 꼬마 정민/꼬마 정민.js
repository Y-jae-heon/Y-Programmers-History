const readline = require("readline");
readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    const [a, b, c] = line.split(" ");
    console.log(Number(a) + Number(b) + Number(c));
  });
