// Linked List Push
// Step 1 - create a new node
// Step 2 - Last node in the list points to the new node
// Step 3 - Update the tail pointer to point to the new node

// Edge case
// If the list is empty, the new node is both the head and the tail
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);

console.log(myLinkedList);
