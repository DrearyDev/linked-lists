'use strict';

function node() {
    let value = null;
    let nextNode = null;

    return { value, nextNode };
};

function linkedList() {
    let head;
    let tail;
    let size = 0;

    const append = (value) => {
        let nodeInList = node();
        nodeInList.value = value;

        if (head === undefined) { head = nodeInList }
        else if (head.nextNode === null){
            head.nextNode = nodeInList;
        };

        if (tail) { tail.nextNode = nodeInList };

        tail = nodeInList;

        size++;

        console.log('-------------');
        console.log(`Head:`);
        console.log(head);

        console.log(`Tail:`);
        console.log(tail);

        console.log(`Size:`);
        console.log(size);
        console.log('-------------');
    };

    const prepend = (value) => {
        let nodeInList = node();
        nodeInList.value = value;

        if (head) { nodeInList.nextNode = head };

        head = nodeInList;

        size++;

        console.log('---------------------');
        console.log(`Head:`);
        console.log(head);

        console.log(`Tail:`);
        console.log(tail);

        console.log(`Size:`);
        console.log(size);
        console.log('---------------------');
    };

    const at = (index) => {
        let current = head;

        let i = 0;
        while (i !== index) {
            current = current.nextNode;
            i++;
        };

        return current;
    };

    const pop = () => {

    };

    const contains = (value) => {

    };

    const find = (value) => {

    };

    const toString = () => {

    };

    const insertAt = (value, index) => {

    };

    const removeAt = (index) => {

    };

    return { head, tail, size, append, prepend, at, pop, contains, find, toString, insertAt, removeAt };
};

let test = linkedList();

test.prepend('asdfasdfasdf');

test.append('jhonathan');

test.append('stephanne');


console.log(test.at(2));// should be stephanne if 0 indexed