const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputA = [];
const inputB = [];
rl.on("line", (line) => {
  if (inputA.length === 0) {
    inputA = line.split(" ");
  } else if (inputA[1] > inputB.length) {
    inputB.push(line.split(" "));
    if (inputB.length === Number(inputA[1])) {
      rl.close();
    }
  }
});

rl.on("close", () => {
  const [n] = inputA;
  const ballInfo = Array.from({ length: Number(n) }, (_, i) => i + 1);

  inputB.forEach(([i, j]) => {
    const curBallI = ballInfo[i - 1];
    const curBallJ = ballInfo[j - 1];

    ballInfo[i - 1] = curBallJ;
    ballInfo[j - 1] = curBallI;
  });

  console.log(ballInfo.join(" "));
});
