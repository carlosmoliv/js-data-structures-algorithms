// Just get a node at a specific index
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

  // get(index) {
  // if (index < 0 || index >= this.length) return undefined;
  //   let currentNode = this.head;
  //   for (let i = 0; i < index; i++) {
  //     currentNode = currentNode.next;
  //   }
  //   return currentNode;
  // }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);

console.log(myLinkedList.get(0));
