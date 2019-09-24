'use strict';

const LinkedList = require('../removeEvenValues');

describe('Testing functionality of the removeEvenValues method on the LinkedList class', () => {
  test('Expecting values 4 (head.next) and 6 (head.next.next) to have been removed from the LinkedList, afterwards head.next.value should be 7', () => {
    const testLinkedList = new LinkedList();
    
    testLinkedList.insertAtHead(7);
    testLinkedList.insertAtHead(6);
    testLinkedList.insertAtHead(4);
    testLinkedList.insertAtHead(1);

    testLinkedList.removeEvenValues();

    expect(testLinkedList.head.value).toEqual(1);
    expect(testLinkedList.head.next.value).not.toEqual(4);
    expect(testLinkedList.head.next.value).not.toEqual(6);
    expect(testLinkedList.head.next.value).toEqual(7);
  });

  test('Expecting no values to be removed from LinkedList with only values 1 (head) and 3 (head.next)', () => {
    const testLinkedList = new LinkedList();
    
    testLinkedList.insertAtHead(3);
    testLinkedList.insertAtHead(1);

    testLinkedList.removeEvenValues();

    expect(testLinkedList.head.value).toEqual(1);
    expect(testLinkedList.head.next.value).toEqual(3);
  });

  test('Expecting head to have been changed to value 7, with the initial head with a value of 2 removed', () => {
    const testLinkedList = new LinkedList();
    
    testLinkedList.insertAtHead(7);
    testLinkedList.insertAtHead(2);

    testLinkedList.removeEvenValues();

    expect(testLinkedList.head.value).toEqual(7);
    expect(testLinkedList.head.value).not.toEqual(2);
  });
});
