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

    insertAt(index, item) {
        // if(!this.head) return null;
        if (index === 0) {
            return this.head = new _Node(item, this.head);
        }

        // need to create a counter because
        // linked lists don't have index numbers like an array
        let counter = 1;

        let currentNode = this.head.next;
        let previousNode = this.head;

        while(counter !== index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter ++;
        }
        // We initialize the new node with pointer to current node FIRST, 
        // pushing the current node forward in the sequence,
        // then reset/rewire/reattach the prevous node pointer to the new node.
        previousNode.next = new _Node(item, currentNode);

    }

    insertLast(item) {
        if (!this.head) return this.insertFirst(item);

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new _Node(item, null);
    }

    find(value) {
        let currentNode = this.head;

        if(!this.head) return null;

        while(currentNode.value !== value) {
            if (!currentNode.next) return null;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove(value) {
        if(!this.head) return null;
        // If the node to be removed is head, make the next node head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        // Start at the head
        let currentNode = this.head;
        // Keep track of previous node
        let previousNode = this.head;

        while(currentNode.value !== value) {
            if (!currentNode.next) return null;
            // Save the previous node
            previousNode = currentNode;
            // Move head to next node
            currentNode = currentNode.next;
        }
        // remove the item by connecting previous node to next node 
        // (leaving removed item in the RAM for garabage collection)
        previousNode.next = currentNode.next;
    }

}

const linkedListHelpers = {
    display: function(list) {
        if (!list.head) {
            console.log('The list is empty');
            return;
        }
        let currentNode = list.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    },
    size: function(list) {
        let counter = 0;
        let currentNode = list.head;
        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }
        console.log('List size: ', counter);
        return counter;
    },
    isEmpty: function(list) {
        if (!list.head) return true;
        return false;
    },
    findPrevious: function(value, list) {
        if (!list.head) return null; // anyway to make validation DRY? like an .all() in Express router?

        let currentNode = list.head;
        let previousNode = currentNode;

        while (currentNode.value !== value) {
            if (currentNode.next === null) {
                return null;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        console.log('Previous node: ', previousNode);
        return previousNode;


    },
    findLast: function(list) {
        if (!list.head) return null;

        let currentNode = list.head;

        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        console.log('Last node: ', currentNode);
        return currentNode;
    },
    removeDuplicates: function(list) {
        let current = list.head;

        while (current !== null) {
            let newNode = current;
            
            while (newNode.next !== null) {
                if (newNode.next.value === current.value) {
                    newNode.next = newNode.next.next;
                }
                else {
                    newNode = newNode.next;
                }
            }
            current = current.next;
        }

        // I don't understand why doesn't this work, too
        // by cutting out the newNode variable in favour of currentNode?
        
        // let currentNode = list.head;
        // while (currentNode !== null) {
        //     while (currentNode.next !== null) {
        //         if (currentNode.next.value === currentNode.value) {
        //             currentNode.next = currentNode.next.next;
        //         }
        //         else {
        //             currentNode = currentNode.next;
        //         }
        //     }
        //     currentNode = currentNode.next;
        // }
    }
};

module.exports = {
    _Node,
    LinkedList,
    linkedListHelpers,
};

// let SLL = new LinkedList();