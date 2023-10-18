// insert a node in the list
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

  unshift(value) {
    const newNode = new Node(value);
    if (this.length <= 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return this;
  }

  // insert(index, value) {
  //   if (index < 0 || index > this.length) return undefined;
  //   if (index === this.length) return this.push(value);
  //   if (index === 0) return this.unshift(value);

  //   const newNode = new Node(value);
  //   const prevNode = this.get(index - 1);
  //   const temp = prevNode.next;
  //   prevNode.next = newNode;
  //   newNode.next = temp;
  //   this.length++;
  //   return this;
  // }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);

console.log(myLinkedList.insert(1, 45));
