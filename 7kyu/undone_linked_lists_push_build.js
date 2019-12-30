// https://www.codewars.com/kata/linked-lists-push-and-buildonetwothree

// Linked list 
  // -> Allows related items to be stored non contiguously in memory
  // --> Every node stores a reference to the next node
  // Good for adding and deleting items -> All you need to do is modify the reference to the next node / previous node, no need to look for contiguous space O(1)
  // Bad for reading / access -> To find a node, x, you have to go through the list until you find it -> O(n) -> sequential access

  // Write push function to update linked list
  // Write build function to initialize linked list

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  function push(head, data) {
    // Go.
  }

  function buildOneTwoThree() {
    // Go.
  }