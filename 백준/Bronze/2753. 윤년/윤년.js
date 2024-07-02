const a = require("fs").readFileSync(0).toString().trim();

console.log(a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0) ? 1 : 0);
