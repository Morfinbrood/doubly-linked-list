const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if (this.length ==0){
            this._head = new Node(data,null,null);
            this._tail = this._head;
        }
        else {
            this._tail = new Node (data,this._tail,null);
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
        length = this._length,
        count = 1;

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    insertAt(index, data) {

    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
