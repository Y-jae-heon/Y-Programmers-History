const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [, K] = input.shift();

const dp = Array(K + 1).fill(0);

input.forEach(([w, k]) => {
  for (let i = K; i >= w; i--) {
    dp[i] = Math.max(dp[i], dp[i - w] + k);
  }
});

console.log(dp[K]);
