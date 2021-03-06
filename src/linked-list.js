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
    }
    return currentNode;
  }

  at(index) {
    return this.nodByInd(index).data;
  }

  insertAt(index, data) {
    // на случай если попытаются сделать вставку на позицию большую чем длины списка
    // т.е. вставить при длине 0 на 0 позицию можно. но нельзя вставить на позицию 1.
    if (index > this.length)
      throw new Error("insertAT// can't insert nod in position = ", index);
    let node = new Node(data);
    if (index == 0) {
      node.next = this._head;
      this._head.prev = node;
      this._head = node;
    } else {
      if (index == this.length) {
        this.append(data)
      } else {
        let currentNode = this.nodByInd(index); // тот что сейчас находится на заменяемой позиции и будет сдвинут право
        let prevNod = currentNode.prev; // тот после котого мы осуществляем вставку
        node.prev = prevNod;
        node.next = currentNode;
        prevNod.next = node;
        currentNode.prev = node;
      }
    }
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
    for (let i = this.length - 1; i >= 0; i--) // удаляем с конца весь список
      this.deleteAt(i);
    return this;
  }

  deleteAt(index) {
    if (this.length < 0 || index < 0 || index >= this.length)
      throw new Error("DeleteAt// can't delete nod with index= " + index);
    const currentNode = this.nodByInd(index);
    const prevNod = currentNode.prev;
    const nextNod = currentNode.next;
    if (index == 0 && this.length == 1) { //когда удаляемый нод является единств в списке
      this._head.data = null;
    } else
    if (index == 0) { //когда удаляем 1-ый нод но он не единств в списке
      nextNod.prev = null;
      this._head = nextNod;
    } else
    if (index == this.length - 1) { //когда удаляем последний нод в списке
      prevNod.next = null;
      this._tail = prevNod;
    } else {
      prevNod.next = nextNod;
      nextNod.prev = prevNod;
    }
    this.length--;
    return this;
  }

  reverse() {
    const length = this.length;
    //offset -переменная смещения к центру списка.  Math.abs(length / 2) это место середины относительно которой свапаем данные нодов
    //для нечетн 0 1 2 3 4  свапаются 0 и 4 ; 1 и 3 ;  2 свапается сама с собой
    //для четных 0 1 2 3   0 и 3 ; 1 и 2.
    for (let offset = 0; offset < Math.abs(length / 2); offset++) {
      let nod1 = this.nodByInd(offset);
      let nod2 = this.nodByInd(length - 1 - offset);
      let temp = nod1.data;
      nod1.data = nod2.data;
      nod2.data = temp;
    }
    return this;
  }

  indexOf(data) {
    let currentNode = this._head;
    let count = 0;
    let index = -1;
    while (count < this.length) {
      if (currentNode.data == data) {
        index = count;
        break;
      }
      currentNode = currentNode.next;
      count++;
    }
    return index;
  }
}

module.exports = LinkedList;