const [n, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ");

let sum = 0;
for (let i = 0; i < n.length; i++) {
  const char = n[n.length - 1 - i]; // 오른쪽에서 왼쪽으로 계산
  const int = parseInt(char, b);
  sum += int * Number(b) ** i;
}

console.log(sum);
