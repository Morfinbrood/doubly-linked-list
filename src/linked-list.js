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

  insertAt(index, data) { // TO DO проверить как работает при индеске 0 и =длине массива
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
    const length = this.length;
    for (var i = length - 1; i >= 0; i--)
      this.deleteAt(i);
    return this;
  }

  deleteAt(index) {
    let currentNode = this.nodByInd(index);
    let prevNod;
    let nextNod;
    if (index == 0 && this.length == 1) {
      this._head.data = null;
      this._tail.data = null;
      currentNode = null;
    } else
    if (index == 0) {
      nextNod = currentNode.next;
      nextNod.prev = null;
      this._head = nextNod;
      currentNode = null;
    } else
    if (index == this.length - 1) {
      prevNod = currentNode.prev;
      prevNod.next = null;
      this._tail = prevNod;
      currentNode = null;
    } else {
      nextNod = currentNode.next;
      prevNod = currentNode.prev;
      prevNod.next = nextNod;
      nextNod.prev = prevNod;
      currentNode = null;
    }
    this.length--;
    return this;
  }

  reverse() {
    const length = this.length;
    let currentNode = this._head;
    let count = 1;
    let arrayNewList = [];
    let oldHead = this._head;
    let oldTail = this._tail;
    //создаем массив дат всех нодов
    for (let i = 0; i < length - 1; i++) {
      currentNode=this.at(i);
      arrayNewList.push(currentNode);
    }

    arrayNewList.reverse();
    count = 1;
    let i = 0;
    currentNode = this._head;
    while (count < length - 1) {
      currentNode = currentNode.next;
      currentNode.data = arrayNewList[i];
      i++;
      count++;
    };

    const oldHeadData = this._head.data;
    const oldTailData = this._tail.data;
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