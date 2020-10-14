class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (!this.head) return this.insertFirst(item);

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new _Node(item, null);
    }

    find(item) {
        let currentNode = this.head;

        if(!this.head) return null;

        while(currentNode.value !== item) {
            if (!currentNode.next) return null;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove(item) {
        if(!this.head) return null;
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        // Start at the head
        let currentNode = this.head;
        // Keep track of previous node
        let previousNode = this.head;

        while(currentNode && currentNode.value !== item) {
            if (!currentNode.next) return null;
            // Save the previous node
            previousNode = currentNode;
            // Move head to next node
            currentNode = currentNode.next;
        }
        if (!currentNode) {
            console.log('Item not found');
            return null;
        }
        // remove the item by connecting previous node to next node 
        // (leaving removed item in the RAM for garabage collection)
        previousNode.next = currentNode.next;
    }

}

module.exports = {
    _Node,
    LinkedList
}
