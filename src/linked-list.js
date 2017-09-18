const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    const node = new Node(data);
    if (this.length == 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this.length++;
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  nodByInd(index) {
    let currentNode = this._head;
    let count = 0;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    };
    return currentNode;
  }

  at(index) {
    return this.nodByInd(index).data;
  }

  insertAt(index, data) {
    const currentNode = this.nodByInd(index - 1);
    const node = new Node(data);
    node.prev = currentNode;
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
    return this;
  }

  isEmpty() {
    if (this.length == 0)
      return true;
    else
      return false;
  }

  clear() {
    while (this.length > 1)
      this.deleteAt(this.length);
    this._head.data = null;
    this._tail.data = null;
    this.length--;
    return this;
  }

  deleteAt(index) {
    let currentNode = this._head;
    let length = this.length;
    let count = 1;
    let prevNode = null;
    let nodeToDelete = null;
    let nextNode = null;
    let deletedNode = null;
    // for 0 index
    if (index == 0) {
      this._head = currentNode.next;
      // next node exist
      if (this._head != null)
        this.head.prev = null;
      // next node not exist
      else
        this._tail = null;
    } // deleting last node
    else
    if (index == this.length) {
      this._tail = this._tail.prev;
      this._tail.next = null;
      // deleting middle node
    } else {
      while (count < index) {
        currentNode = currentNode.next;
        count++;
      }
      prevNode = currentNode.prev;
      nodeToDelete = currentNode;
      nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
    }

    this.length--;
    return this;
  }

  reverse() {
    let currentNode = this._head;
    let length = this.length;
    let count = 1;
    let arrayNewList = [];

    let oldHead = this._head;
    let oldTail = this._tail;

    while (count < this.length - 1) {
      currentNode = currentNode.next;
      arrayNewList.push(currentNode.data);
      count++;
    };

    arrayNewList.reverse();
    count = 1;
    let i = 0;
    currentNode = this._head;
    while (count < this.length - 1) {
      currentNode = currentNode.next;
      currentNode.data = arrayNewList[i];
      i++;
      count++;
    };

    let oldHeadData = this._head.data;
    let oldTailData = this._tail.data;
    this._head.data = oldTailData;
    this._tail.data = oldHeadData;
    return this;
  }

  indexOf(data) {
    let currentNode = this._head;
    let count = 0;
    let index = -1;

    while (count < this.length) {
      if (currentNode.data == data)
        index = count;
      currentNode = currentNode.next;
      count++;
    };
    return index;
  }
}

module.exports = LinkedList;