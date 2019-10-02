'use strict';

const findBinaryTreeValue = require('../findBinaryTreeValue');

const Tree = require('../../../dataStructureClasses/Tree');
const Node = require('../../../dataStructureClasses/Node');

describe('Testing functionality of the findBinaryTreeValue method', () => {
  test('Expecting return of true if value is found', () => {
    const testTree = new Tree(1);

    testTree.root.left = new Node(2);
    testTree.root.right = new Node(3);

    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(5);

    testTree.root.right.left = new Node(6);
    testTree.root.right.right = new Node(7);

    expect(findBinaryTreeValue(4)).toEqual(true);
    expect(findBinaryTreeValue(7)).toEqual(true);
  });

  test('Expecting return of false if the value is not present in the tree', () => {
    const testTree = new Tree(1);

    testTree.root.left = new Node(2);
    testTree.root.right = new Node(3);

    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(5);

    testTree.root.right.left = new Node(6);
    testTree.root.right.right = new Node(7);

    expect(findBinaryTreeValue(testTree.root, '2')).toEqual(false);
    expect(findBinaryTreeValue(testTree.root, 10)).toEqual(false);
  });
});
