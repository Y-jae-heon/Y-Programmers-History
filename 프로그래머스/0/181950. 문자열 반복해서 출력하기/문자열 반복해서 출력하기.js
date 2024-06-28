const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    const [string, number] = line.split(" ");
    let result = "";
    for (let i = 0; i < number; i++) {
      result += string;
    }
    console.log(result);
  });
