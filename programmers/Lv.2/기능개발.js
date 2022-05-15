const Queue = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(node) {
    if (this.head == null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  dequeue() {
    const node = this.head;
    this.head = node.next;
    this.size--;
    return node;
  }
  getSize() {
    return this.size;
  }
};

const Node = class {
  constructor(value) {
    this.value = value;
  }
};

function solution(progresses, speeds) {
  const result = [];
  const queue = new Queue();

  for (let i = 0; i < progresses.length; i++) {
    const days = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.enqueue(new Node(days));
  }

  let temp = [];
  while (queue.getSize() > 0) {
    const node = queue.dequeue();

    if (temp.length == 0) {
      temp.push(node);
    } else {
      if (temp[0].value >= node.value) {
        temp.push(node);
      } else {
        result.push(temp.length);
        temp = [node];
      }
    }
  }

  if (temp.length) result.push(temp.length);

  return result;
}
