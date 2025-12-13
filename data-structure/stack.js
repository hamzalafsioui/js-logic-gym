class Stack {
  #items = [];
  #count = 0;
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add item to stack
  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  // Remove top item
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    this.count--;
    const removedItem = this.items[this.count];
    delete this.items[this.count];

    return removedItem;
  }

  // View top item without removing
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.count - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.count === 0;
  }

  // Number of elements
  size() {
    return this.count;
  }

  // Display stack items only
  displayStack() {
    let result = [];

    for (let i = 0; i < this.count; i++) {
      result[i] = this.items[i];
    }

    console.log(result);
  }
}

const stack = new Stack();

stack.push(2);
stack.push(1);
stack.push(11);
stack.push(10);

console.log(stack.pop()); // 10
console.log(stack.peek()); // 11
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 3

stack.displayStack(); // [2, 1, 11]
