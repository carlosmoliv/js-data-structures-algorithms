// Linked List Pop
// Remove the last node from the linked list and return the popped node

// Edge Cases:
// Empty linked list
// Single node linked list

// need to iterate through the linked list until we reach the tail
// set the tail to the previous node
// set the new tail's next to null

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

  // Iterate through the list.
  // both temp and previous are set to the head
  // if temp.next is pointing to another node, set previous to temp and temp to temp.next
  // Until the end of the list is reached, temp.next is not pointing to another node and temp is the tail
  // remove temp, and tail is set to previous
  // decrement length
  // return temp.value
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
}

myLinkedList = new LinkedList(1);
myLinkedList.pop();
myLinkedList.pop();

console.log(myLinkedList);
