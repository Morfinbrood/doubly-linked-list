const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    var node = new Node(data);
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

  at(index) {
    var currentNode = this._head,
      count = 0;

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    };
    return currentNode.data;
  }

  insertAt(index, data) {
    var currentNode = this._head,
      count = 1;

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    };
    var node = new Node(data);
    node.prev = currentNode;
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
    return this;
  }

  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    while (this.length > 1) {
      this.deleteAt(this.length);
    };
    this._head.data = null;
    this._tail.data = null;
    this.length--;
    return this;
  }

  deleteAt(index) {
    var currentNode = this._head,
      length = this.length,
      count = 1,
      prevNode = null,
      nodeToDelete = null,
      nextNode = null,
      deletedNode = null;
    // for 0 index
    if (index == 0) {
      this._head = currentNode.next;
      // next node exist
      if (this._head != null) {
        this.head.prev = null;
        // next node not exist
      } else {
        this._tail = null;
      }
    } // deleting last node
    else if (index == this.length) {
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
    var currentNode = this._head,
      length = this.length,
      count = 1,
      arrayNewList = [];

    var oldHead = this._head,
      oldTail = this._tail;

    while (count < this.length - 1) {
      currentNode = currentNode.next;
      arrayNewList.push(currentNode.data);
      count++;
    };

    arrayNewList.reverse();
    var count = 1,
      i = 0,
      currentNode = this._head;
    while (count < this.length - 1) {
      currentNode = currentNode.next;
      currentNode.data = arrayNewList[i];
      i++;
      count++;
    };

    var oldHeadData = this._head.data,
      oldTailData = this._tail.data;
    this._head.data = oldTailData;
    this._tail.data = oldHeadData;
    return this;
  }

  indexOf(data) {
    var currentNode = this._head,
      count = 0,
      index = -1;

    while (count < this.length) {
      if (currentNode.data == data) {
        index = count;
      }
      currentNode = currentNode.next;
      count++;
    };
    return index;
  }
}

module.exports = LinkedList;