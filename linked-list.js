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

    insertBefore(value, item) {
        if(!this.head) return null;
        // If the lookup value is the first item in the list
        if(this.head.value === value) {
            this.insertFirst(item); // this.head = new _Node(item, this.head);
            return;
        }

        // Start at the head and keep track of previous node
        let currentNode = this.head;
        let previousNode = this.head;

        while(currentNode.value !== value) {
            if (!currentNode.next) return null;
            previousNode = currentNode;
            currentNode = currentNode.next;

        }
        // insert new node item before current node value
        // and rewire previous node next pointer to point to new node not current node.
        previousNode.next = new _Node(item, currentNode);

    }

    insertAfter(value, item) {
        if(!this.head) return null;

        if(this.head.value === value) {
            this.head.next = new _Node(item, null);
            return;
        }

        // Start at the head
        let currentNode = this.head;

        while(currentNode.value !== value) {
            if (!currentNode.next) return null;
            currentNode = currentNode.next;
        }
        // Insert new node item after current node.
        // Rewire pointers... note that the sequence/order is crucial, 
        // otherwise next node and rest of linked list may be lost.
        // We initialize the new node with the current pointer FIRST, 
        // then reset/rewire/reattach the current pointer to the new node.
        currentNode.next = new _Node(item, currentNode.next);

    }

    insertAt(position) {}

}

module.exports = {
    _Node,
    LinkedList
};

// let SLL = new LinkedList();