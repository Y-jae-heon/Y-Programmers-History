const N = require("fs").readFileSync(0).toString().trim();

console.log((2 ** N + 1) ** 2);

// 한 줄의 사각형의 갯수 = 2 ** n
// 한 줄의 꼭짓점의 갯수 = 한 줄의 사각형의 갯수 + 1 = 2 ** n + 1
// 총 꼭짓점의 갯수 = 한 줄의 꼭짓점의 갯수 ** 2 = (2 ** n + 1) ** 2
