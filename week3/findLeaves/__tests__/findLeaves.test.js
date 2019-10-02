'use strict';

const findLeaves = require('../findLeaves');

const Tree = require('../../../dataStructureClasses/Tree');
const Node = require('../../../dataStructureClasses/Node');

describe('Testing functionality of findLeaves function', () => {
  test('Expecting proper return of [4, 5, 6, 7]', () => {
    const testTree = new Tree(1);

    testTree.root.left = new Node(2);
    testTree.root.right = new Node(3);

    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(5);

    testTree.root.right.left = new Node(6);
    testTree.root.right.right = new Node(7);

    expect(findLeaves(testTree.root)).toEqual([4, 5, 6, 7]);
  });

  test('Expecting proper return of [1] if the root is the only node', () => {
    const testTree = new Tree(1);
  
    expect(findLeaves(testTree.root)).toEqual([1]);
  });

  test('Expecting proper return of [] if the root is not a node', () => {
    const testTree = {
      root: 0,
    };

    expect(findLeaves(testTree.root)).toEqual([]);
  });
});
