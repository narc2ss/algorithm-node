const Node = class {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

const Queue = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(node) {
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    const node = this.head;
    this.head = node.next;
    this.size--;
    return node;
  }
  peek() {
    return this.head;
  }
};

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue(new Node([priorities[i], i]));
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (queue.size > 0) {
    if (queue.head.value[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const { value } = queue.dequeue();
      count++;
      if (location === value[1]) return count;
    }
  }

  return count;
}
