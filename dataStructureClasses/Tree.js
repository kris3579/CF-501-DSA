'use strict';

const Node = require('./Node');

class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}

module.exports = Tree;
