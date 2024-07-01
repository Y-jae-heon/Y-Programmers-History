const readline = require("readline");
readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    const longCount = Math.floor(line / 4);
    console.log(new Array(longCount).fill("long").join(" ") + " int");
  });
