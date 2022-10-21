//linked list node constructor
function Node(data) {
  this.data = data;
  this.next = null;
}

function insertAtBeg(item, head) {
  let temp = new Node(item);
  if (head === null) {
    head = temp;
  }
  else {
    temp.next = head;
    head = temp;
  }
  return head;
}

function traverse(temp) {
  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function Main() {
  let head = null;
  head = insertAtBeg(2, head)
  head = insertAtBeg(5, head)
  head = insertAtBeg(7, head)
  traverse(head);
}

Main()
