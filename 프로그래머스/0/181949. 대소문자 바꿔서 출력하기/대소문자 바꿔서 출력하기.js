const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    let result = "";

    for (const l of line) {
      if (l === l.toUpperCase()) {
        result += l.toLowerCase();
      } else {
        result += l.toUpperCase();
      }
    }

    console.log(result);
  });
