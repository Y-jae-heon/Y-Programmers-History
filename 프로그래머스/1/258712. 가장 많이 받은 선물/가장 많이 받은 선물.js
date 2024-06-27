function solution(friends, gifts) {
    const len = friends.length;
    // len = [[0,0,0], [0,0,0], [0,0,0]];
    const giftsTables = new Array(len).fill(0).map(() => new Array(len).fill(0));
    const giftsIndex = new Array(len).fill(0);
    const nextGiftMax = new Array(len).fill(0);

    // 선물 주고받은 내역
    gifts.forEach((el, i) => {
        const [from, to] = el.split(" ");
        const fromIndex = friends.findIndex(item => item === from);
        const toIndex = friends.findIndex(item => item === to);
        // A가 B에게 준 선물 갯수
        giftsTables[fromIndex][toIndex]++;
    });

    // 선물 지수 계산
    for (let i = 0; i < len; i++) {
        // 각각 선물을 준 갯수
        giftsIndex[i] = giftsTables[i].reduce((acc, cur) => acc += cur, 0);
        for (let j = 0; j < len; j++) {
            // 선물을 받은 갯수만큼 -
            giftsIndex[i] -= giftsTables[j][i];
        }
    }
    // 다음달 계산
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            // 두 사람 사이 더 많은 선물을 준 사람
            if(i === j) continue; // 동일 인물
            // A 가 B 에게 선물을 더 많이 줬다면 A에게
            if(giftsTables[i][j] > giftsTables[j][i]) nextGiftMax[i]++;
            // B 가 A 에게 선물을 더 많이 줬다면 B에게
            if(giftsTables[i][j] < giftsTables[j][i]) nextGiftMax[j]++;
            // A 와 B의 선물이 같거나 주고 받은 적이 없다면
            if(giftsTables[i][j] === giftsTables[j][i]) {
                // A 가 B 보다 선물지수가 높다면 A에게
                if(giftsIndex[i] > giftsIndex[j]) nextGiftMax[i]++;
                // B 가 A 보다 선물지수가 높다면 B에게
                if(giftsIndex[i] < giftsIndex[j]) nextGiftMax[j]++;
            }
        }
    }

    return Math.max(...nextGiftMax);
}