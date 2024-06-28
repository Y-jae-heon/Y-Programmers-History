function solution(bandage, health, attacks) {
  const endTime = Math.max(...attacks.map((item) => item[0]));
  const attackInfo = new Map();
  let curHealth = health;
  let successTime = 0;

  attacks.forEach((el) => {
    attackInfo.set(el[0], el[1]);
  });

  for (let i = 0; i <= endTime; i++) {
    const find = attackInfo.get(i);
    if (find) {
      curHealth -= find;
      successTime = 0;
      if(curHealth <= 0) return -1;
    } else {
      curHealth += bandage[1];
      successTime++;
      if (successTime == bandage[0]) {
        curHealth += bandage[2];
        successTime = 0;
      }
      if (curHealth > health) {
        curHealth = health;
      }
    }
  }

  if (curHealth <= 0) {
    return -1;
  }

  return curHealth;
}