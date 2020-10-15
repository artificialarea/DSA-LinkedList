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

    // task 5
    SLL.insertAfter('Helo', 'Hotdog');

    // task 6
    SLL.insertAt(4, 'Kat');
    SLL.insertAt(0, 'Kat erzat');

    // task 7
    SLL.remove('Tauhida');


    console.log(SLL);
    console.log(JSON.stringify(SLL, null, 2));
    console.log(SLL.find('Boomer'));
    return SLL;
}

main();
