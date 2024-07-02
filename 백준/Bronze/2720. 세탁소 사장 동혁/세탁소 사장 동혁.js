const [, ...b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const coinValues = [25, 10, 5, 1];

b.forEach((money) => {
  const coinCount = [];
  let resultMoney = money;
  for (const coin of coinValues) {
    const count = Math.floor(resultMoney / coin);
    coinCount.push(count);
    resultMoney -= coin * count;
  }
  console.log(coinCount.join(" "));
});
