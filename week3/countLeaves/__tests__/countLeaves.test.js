'use strict';

const countLeaves = require('../countLeaves');

const Tree = require('../../../dataStructureClasses/Tree');
const Node = require('../../../dataStructureClasses/Node');

describe('Testing functionality of the countLeaves function', () => {
  test('Expect proper return of 4 leaves', () => {
    const testTree = new Tree(1);

    testTree.root.left = new Node(2);
    testTree.root.right = new Node(3);

    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(5);

    testTree.root.right.left = new Node(6);
    testTree.root.right.right = new Node(7);

    expect(countLeaves(testTree.root)).toEqual(4);
  });

  test('Expecting proper return of 1 if root has no children', () => {
    const testTree = new Tree(1);
  
    expect(countLeaves(testTree.root)).toEqual(1);
  });

  test('Expecting proper return of 0 if the root is not a node', () => {
    const testTree = {
      root: 0,
    };

    expect(countLeaves(testTree.root)).toEqual(0);
  });
});
