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

  // Time: O(n) Where n is the number of nodes traversed
  // Space: O(1)

  insertAtTailLinearTime(value) {
    if (this.head === null) {
      this.head = new Node(value);
    }  
    
    if (this.head !== null) {
      let current = this.head;
      
      while (current.next) {
        current = current.next;
      }
      
      current.next = new Node(value);
    }
  }
}

module.exports = LinkedList;
