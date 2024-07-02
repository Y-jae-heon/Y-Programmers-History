const a = require("fs").readFileSync(0).toString().trim();

if (a > 89) {
  console.log("A");
} else if (a > 79) {
  console.log("B");
} else if (a > 69) {
  console.log("C");
} else if (a > 59) {
  console.log("D");
} else {
  console.log("F");
}
