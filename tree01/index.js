"use strict";

//* NODE Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//* Binary Search class
class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }
  //* Function -  Binary tree Size
  size() {
    return this.count;
  }

  //* Function - Binary tree Miniuim Value
  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  //* Function - Binary tree Maxiuim Value
  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  //* Function - Insert in to Binary Tree
  insert(value) {
    this.count++;
    let newNode = new Node(value);

    const searchNode = (currentNode) => {
      //* if the value >node.value got right
      if (value > currentNode.value) {
        if (currentNode.right) {
          searchNode(currentNode.right);
        } else {
          currentNode.right = newNode;
        }
      }

      //* if the value >node.value got left
      else {
        if (currentNode.left) {
          searchNode(currentNode.left);
        } else {
          currentNode.left = newNode;
        }
      }
    };

    searchNode(this.root);
  }

  //* Function - Constain in to Binary Tree
  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      //* check Current Node Value
      if (value == currentNode.value) {
        return true;
      }
      //* if the value >node.value got right
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } //* if the value >node.value got left
      else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  //* Function - Dept First Search - InOrder - left, root, right
  dfsInorder() {
    let answers = [];

    const traverseTree = (currentNode) => {
      if (currentNode.left) {
        traverseTree(currentNode.left);
      }
      answers.push(currentNode.value);
      if (currentNode.right) {
        traverseTree(currentNode.right);
      }
    };
    traverseTree(this.root);
    return answers;
  }

  //* Function - Dept First Search - PreOrder -   root, left, right
  dfsPreorder() {
    let answers = [];
    const traverseTree = (currentNode) => {
      answers.push(currentNode.value);
      if (currentNode.left) {
        traverseTree(currentNode.left);
      }

      if (currentNode.right) {
        traverseTree(currentnode.right);
      }
    };
    traverseTree(this.root);
    return answers;
  }

  //* Function - Dept First Search - PostOrder -   left,  right, root
  dfsPostorder() {
    let answers = [];
    const traverseTree = (currentNode) => {
      if (currentNode.left) {
        traverseTree(currentNode.left);
      }

      if (currentNode.right) {
        traverseTree(currentnode.right);
      }
      answers.push(currentNode.value);
    };
    traverseTree(this.root);
    return answers;
  }

  //* Function - Breath First Search -
  bfs() {
    let answers = [];
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      console.log("🚀 ~ file: index.js:146 ~ BinarySearchTree ~ bfs ~ queue- before", queue);

      let currentNode = queue.shift();
      console.log("🚀 ~ file: index.js:146 ~ BinarySearchTree ~ bfs ~ queue- after", queue);

      answers.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return answers;
  }

  //* Function - Print All Elements in Binary Tree
  printBST() {
    console.log(this.root);
  }
}

//* Call Binary Tree
let BST = new BinarySearchTree(15);
BST.insert(3);
BST.insert(36);
BST.insert(2);
BST.insert(12);
BST.insert(28);
BST.insert(39);

console.log(BST.bfs());
