function solution(bandage, health, attacks) {
  const [time, recovery, bonusRecovery] = bandage;
  let curHealth = health;

  let curAttack = 0;
  for (const [attackTime, damage] of attacks) {
    const timeDiff = attackTime - curAttack - 1;
    curHealth +=
      timeDiff * recovery + Math.floor(timeDiff / time) * bonusRecovery;

    if (curHealth > health) curHealth = health;
    curHealth -= damage;
    if (curHealth <= 0) return -1;
    curAttack = attackTime;
  }

  return curHealth;
}