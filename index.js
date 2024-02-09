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

        if (head === undefined) { head = nodeInList };

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

    };

    const at = (index) => {

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

test.append('jhonathan');

test.append('stephanne');
