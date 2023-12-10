class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /// WRITE INSERT METHOD HERE ///
  //                            //
  //                            //
  //                            //
  //                            //
  ////////////////////////////////
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) return undefined;
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

function test() {
  let myBST = new BST();

  myBST.insert(2);
  myBST.insert(1);
  myBST.insert(3);

  /*
        THE LINES ABOVE CREATE THIS TREE:
                     2
                    / \
                   1   3
    */

  console.log("Root:", myBST.root.value);
  console.log("\nRoot->Left:", myBST.root.left.value);
  console.log("\nRoot->Right:", myBST.root.right.value);
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Root: 2

    Root->Left: 1

    Root->Right: 3

*/
