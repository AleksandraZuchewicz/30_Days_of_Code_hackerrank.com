this.insert = function(head, data) {
  const constHead = head;
  const newNode = new Node(data);
  if (head == null) {
    head = newNode;
    return head;
  } else {
    while (head.next != null) {
      head = head.next;
    }
    head.next = newNode;
  }
  return constHead;
};
