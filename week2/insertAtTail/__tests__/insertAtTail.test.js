'use strict';

const LinkedListConstantTime = require('../insertAtTailConstantTime');
const LinkedListLinearTime = require('../insertAtTailLinearTime');

describe('Testing functionality of the inserAtTailConstantTime/LinearTime LinkedList methods', () => {
  test('Expect the tail to have a value of 7 after insertAtTail on a list with multple nodes', () => {
    const constantTimeLinkedList = new LinkedListConstantTime();
    const linearTimeLinkedList = new LinkedListLinearTime();

    constantTimeLinkedList.insertAtHead(3);
    constantTimeLinkedList.insertAtHead(10);
    constantTimeLinkedList.insertAtHead(4);
    linearTimeLinkedList.insertAtHead(3);
    linearTimeLinkedList.insertAtHead(10);
    linearTimeLinkedList.insertAtHead(4);

    constantTimeLinkedList.insertAtTailConstantTime(7);
    linearTimeLinkedList.insertAtTailLinearTime(7);

    let constantCurrent = constantTimeLinkedList.head;
    let linearCurrent = linearTimeLinkedList.head;

    while (constantCurrent.next) {
      constantCurrent = constantCurrent.next;
    }
    while (linearCurrent.next) {
      linearCurrent = linearCurrent.next;
    }

    expect(constantCurrent.value).toEqual(7);
    expect(linearCurrent.value).toEqual(7);
  });

  test('Expecting the head to have a value of 7 after insertAtTail on a empty list', () => {
    const constantTimeLinkedList = new LinkedListConstantTime();
    const linearTimeLinkedList = new LinkedListLinearTime();

    constantTimeLinkedList.insertAtTailConstantTime(7);
    linearTimeLinkedList.insertAtTailLinearTime(7);

    expect(constantTimeLinkedList.head.value).toEqual(7);
    expect(linearTimeLinkedList.head.value).toEqual(7);
  });
});
