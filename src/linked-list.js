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
            this._tail=node;
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
        lengthAt = this.length,
        count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        };
        return currentNode.data;
    }

    insertAt(index, data) {


    }

    isEmpty() {
        if (this.length==0){
            return true;
        }
        else {
            return false;
        }
    }

    clear() {}

    deleteAt(index) {
        var currentNode = this._head,
        length = this.length,
        count = 1,
        beforeNodeToDelete = null,
        nodeToDelete = null,
        afterNodeToDelete=null,
        deletedNode = null;
        // not correct index
        if (length == 0 || index < 1 || index > length) {
            throw new Error('not correct index');
        }
        // for 1 index
        if (index == 1) {
            this._head = currentNode.next;
            // next node exist
            if (!this._head) {
                this.head.prev = null;
                // next node not exist
            } 
            else {
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

            beforeNodeToDelete = currentNode.prev;
            nodeToDelete = currentNode;
            afterNodeToDelete = currentNode.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.prev = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }
        this._length--;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
