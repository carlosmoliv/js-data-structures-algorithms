// Set a node at a specific index
// Edge cases: index is less than 0 or greater than the length of the list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length <= 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return this;
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);

console.log(myLinkedList.set(8, 888));
