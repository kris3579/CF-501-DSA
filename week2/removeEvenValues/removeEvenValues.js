'use strict';

const Node = require('../../dataStructureClasses/Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // Time: O(2n) -> n Where n is the amount of even nodes in the LinkedList
  // Space: O(1)

  removeEvenValues() {
    let current = this.head;

    while (this.head.value % 2 === 0) {
      if (this.head.next) {
        current = this.head.next;
        this.head.next = null;
        this.head = current;
      } else {
        this.head.value = null;
      }
    }

    while (current.next) {
      if (current.next.value % 2 === 0) {
        if (current.next.next) {
          const helper = current.next.next;
          current.next.next = null;
          current.next = helper;
        } else {
          current.next = null;
        }
      } else {
        current = current.next;
      }
    }
  }
}

module.exports = LinkedList;
