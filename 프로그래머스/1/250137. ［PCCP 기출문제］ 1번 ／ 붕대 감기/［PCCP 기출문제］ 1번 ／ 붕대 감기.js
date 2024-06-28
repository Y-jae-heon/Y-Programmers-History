function solution(bandage, health, attacks) {
  const [time, recovery, bonusRecovery] = bandage;
  let curHealth = health;

  let curAttack = 0;
  for (const [attackTime, damage] of attacks) {
    // 이전 공격 시간과 현재 공격 시간 차이
    const timeDiff = attackTime - curAttack - 1;
    curHealth += // 시간 차이 동안 회복 및 시간 차이와 회복 시간이 같을 시 추가 회복
      timeDiff * recovery + Math.floor(timeDiff / time) * bonusRecovery;

    // 현재 체력이 시작 체력보다 높을 시 체력 최대치 초기화
    if (curHealth > health) curHealth = health;
    // 입은 공격
    curHealth -= damage;
    // 체력이 0 이하일 시 죽음
    if (curHealth <= 0) return -1;
    // 현재 공격 시간
    curAttack = attackTime;
  }

  return curHealth;
}
