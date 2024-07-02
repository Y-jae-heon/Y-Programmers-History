const [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [c, d] = [Math.sign(a), Math.sign(b)];
if (c >= 0) {
  if (d >= 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (d >= 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}