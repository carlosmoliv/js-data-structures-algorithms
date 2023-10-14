// In order to create a node
// What is being created by the node class is:
// {value: 4, next:null}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // Creates a new node
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Creates a new node and adds it to the end of the list
  push(value) {}

  // Creates a new node and adds it to the beginning of the list
  unshift(value) {}

  // Creates a new node and adds it to whatever index is passed
  insert(index, value) {}
}

// Basically creates a new node with head and tail pointing to it
const myLinkedList = new LinkedList(4);
console.log(myLinkedList);
