# Working with linked lists

**[Thinkful Data Structures & Algorithms assignment](https://courses.thinkful.com/dsa-v1/checkpoint/5#assignment)**

To run any of these scripts, in terminal command line enter: `node script-name.js`

<br />


## Create a linked list class

see: **`linked-list.js`**


## Creating a singly linked list

see: **`singly-linked-list.js`**


## Supplemental funtions for linked list

Note that these are free functions instead of methods of the linked list class, so implement them outside the linked list class.

see: `linkedListHelpers` service object in **`linked-list.js`**

## Mystery program

Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

> **What does this program do?** It removes duplicate nodes. It does so by traversing the list once for each node in the list. If it encounters another node with the same value as the current node, it instructs the current node to reset it's next pointer to the node _after_ the next node, thereby removing the node with the duplicate value.
> **Complexity?** O(n^2), quadratic (aka polynomial) because the algorithm requires nested loops.

```js
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
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
}
```