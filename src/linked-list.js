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
        node.prev=currentNode;
        node.next=currentNode.next;
        currentNode.next=node;
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
        prevNode = null,
        nodeToDelete = null,
        nextNode=null,
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

            prevNode = currentNode.prev;
            nodeToDelete = currentNode;
            nextNode = currentNode.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }
        this._length--;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
