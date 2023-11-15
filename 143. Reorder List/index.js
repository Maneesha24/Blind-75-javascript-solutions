const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  let middle = getMiddle(head);
  let secondHalf = middle.next;
  middle.next = null;

  let firstHalf = head;
  let reversedSecond = reverse(secondHalf);

  let first = firstHalf;
  let second = reversedSecond;

  while (second) {
    let tempFirst = first.next;
    let tempSecond = second.next;

    first.next = second;
    second.next = tempFirst;

    first = tempFirst;
    second = tempSecond;
  }

  return head;
};

const getMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverse = (head) => {
  let prev = null;
  let node = head;
  let next = null;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

module.exports = reorderList;
