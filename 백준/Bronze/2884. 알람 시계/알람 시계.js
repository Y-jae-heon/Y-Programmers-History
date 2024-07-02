const [a, b] = require("fs").readFileSync(0).toString().trim()
  .split` `;
console.log(
  b - 45 < 0 ? `${a - 1 < 0 ? 23 : a - 1} ${b - 45 + 60}` : `${a} ${b - 45}`
);