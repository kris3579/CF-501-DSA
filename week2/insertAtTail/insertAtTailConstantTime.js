'use strict';

const Node = require('../../dataStructureClasses/Node');

class LinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = this.head;
  }

  insertAtHead(value) {
    if (this.head.value === null) {
      this.head.value = value;
    }

    if (this.head.value !== null) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }

  // Time: O(1) We will only ever need to reassign the connection to one node
  // Space: O(1)

  insertAtTailConstantTime(value) {
    if (this.head.value === null) {
      this.head.value = value;
    }

    if (this.head !== null) {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }
}

module.exports = LinkedList;
