const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length ==0){
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev=this._tail;
            node._tail=node;
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
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

        if (length === 0 || index < 1 || index > length) {
            throw new Error(message.failure);
        }

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        //console.log(currentNode.data);
        return currentNode.data;
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
