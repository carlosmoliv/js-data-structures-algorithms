// The only difference is that the Node has previous
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(8);
console.log(myDoublyLinkedList);
