class Stack {
  constructor() {
    this.items = {};
    this.head = 0;
  }
  push(value) {
    this.items[this.head] = value;
    this.head++;
  }
  pop() {
    const item = this.items[this.head - 1];
    delete this.items[this.head - 1];
    this.head--;
    return item;
  }
  isEmpty() {
    return this.head === 0;
  }
  size() {
    return this.head;
  }
  peek() {
    return this.items[this.head - 1];
  }
  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(4);
stack.push(5);
stack.push(7);
stack.push(2);
stack.push(0);
stack.print();
console.log(stack.size());
stack.pop();
stack.print();
