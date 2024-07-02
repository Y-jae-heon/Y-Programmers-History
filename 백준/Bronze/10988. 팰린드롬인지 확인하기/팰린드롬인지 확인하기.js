const str = require("fs").readFileSync(0).toString().trim();
const rev = str.split("").reverse().join("");
console.log(str === rev ? 1 : 0);
