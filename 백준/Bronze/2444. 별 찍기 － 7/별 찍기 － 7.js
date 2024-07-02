const readline = require("readline");

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (N) => {
    for (let i = 1; i < Number(N) * 2; i++) {
      if (Number(N) > i) {
        console.log(" ".repeat(Number(N) - i) + "*".repeat(i + (i - 1)));
      } else {
        console.log(
          " ".repeat(Number(N) - (Number(N) * 2 - i)) +
            "*".repeat((Number(N) * 2 - i) * 2 - 1)
        );
      }
    }
  });
