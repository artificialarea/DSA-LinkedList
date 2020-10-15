const { LinkedList } = require("./linked-list");

function main() {
    const SLL = new LinkedList; // initialize linked list object

    // task 1
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    // task 2
    SLL.insertLast('Tauhida');

    // task 3
    SLL.remove('Husker');

    // task 4
    SLL.insertBefore('Boomer', 'Athena');
    SLL.insertBefore('Apollo', 'Dualla');















    console.log(SLL);
    console.log(JSON.stringify(SLL, null, 2));
    return SLL;
}

main();
