const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

class MinHeap {
  constructor() {
    this.values = [];
  }

  getLen() {
    return this.values.length;
  }

  enqueue(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const el = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (el >= parent) break;
      this.values[parentIdx] = el;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const el = this.values[0];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let left, right;
      let swap = null;
      if (leftIdx < len) {
        left = this.values[leftIdx];
        if (left < el) {
          swap = leftIdx;
        }
      }
      if (rightIdx < len) {
        right = this.values[rightIdx];
        if ((swap === null && right < el) || (swap !== null && right < left)) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = el;
      idx = swap;
    }
  }
}

class MaxHeap {
  constructor() {
    this.values = [];
  }

  getLen() {
    return this.values.length;
  }

  enqueue(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const el = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (el <= parent) break;
      this.values[parentIdx] = el;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const el = this.values[0];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let left, right;
      let swap = null;
      if (leftIdx < len) {
        left = this.values[leftIdx];
        if (left > el) {
          swap = leftIdx;
        }
      }
      if (rightIdx < len) {
        right = this.values[rightIdx];
        if ((swap === null && right > el) || (swap !== null && right > left)) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = el;
      idx = swap;
    }
  }
}

rl.on("line", (line) => {
  input.push(+line);
  if (input.length - 1 === input[0]) {
    rl.close();
  }
});
rl.on("close", () => {
  const N = input[0];
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();
  const answer = [input[1]];
  maxHeap.enqueue(input[1]);
  for (let i = 2; i <= N; i++) {
    if (input[i] > maxHeap.values[0]) minHeap.enqueue(input[i]);
    else maxHeap.enqueue(input[i]);

    if (minHeap.getLen() > maxHeap.getLen()) {
      maxHeap.enqueue(minHeap.dequeue());
    } else if (minHeap.getLen() + 1 < maxHeap.getLen()) {
      minHeap.enqueue(maxHeap.dequeue());
    }
    answer.push(maxHeap.values[0]);
  }
  console.log(answer.join("\n"));
});
