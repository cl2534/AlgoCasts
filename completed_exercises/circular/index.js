// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
// a (head) - b <-> c

// a - b - c - d - e - f - g 
function circular(list) {
  let slow = list.getFirst(); //a
  let fast = list.getFirst(); //a

//b & c
  while (fast.next && fast.next.next) {
    slow = slow.next; //b
    fast = fast.next.next; //b

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;
