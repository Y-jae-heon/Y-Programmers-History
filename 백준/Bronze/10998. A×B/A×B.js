const [a, b] = require("fs").readFileSync(0).toString().split(" ");
console.log(+a * +b);
