// remove a node from the linked list at a specific index
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

  pop() {
    if (this.length <= 0) return undefined;
    let temp = this.head;
    let previous = this.head;
    while (temp.next) {
      previous = temp;
      temp = temp.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  shift() {
    if (this.length <= 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    temp.next = null;
    this.length--;
    return temp;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();

    const nodeToRemove = this.get(index);
    const prevNode = this.get(index - 1);
    prevNode.next = nodeToRemove.next;
    nodeToRemove.next = null;

    this.length--;
    return this;
  }

  //  more efficient remove method
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    // here we are not using the get method because we already have the previous node
    // and avoid traversing the linked list again
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);

console.log(myLinkedList.remove(1));
