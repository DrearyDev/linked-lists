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
        let current = head;

        //subtract 1 since its 0-indexed and another since we want the one right before the tail
        let index = size - 2;

        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        };

        console.log(current);

        current.nextNode = null;
        tail = current;

        size--;

        console.log('-------------------------------');
        console.log(`Head:`);
        console.log(head);

        console.log(`Tail:`);
        console.log(tail);

        console.log(`Size:`);
        console.log(size);
        console.log('-------------------------------');
    };

    const contains = (value) => {

        let current = head;
        let i = 0;
        
        while (i < size) {
            if (current.value === value) { return true }
            else {
                current = current.nextNode;
                i++;
            };
        };

        return false;
    };

    const find = (value) => {

        let current = head;
        let index = 0;

        while (index < size) {
            if (current.value === value) { return index }
            else {
                current = current.nextNode;
                index++;
            };
        };

        return null;
    };

    const toString = () => {
        let string = `(${head.value}) -> `;

        let current = head.nextNode;
        let i = 0;

        while (i < size-1) {
            string += `(${current.value}) -> `;
            current = current.nextNode;
            i++;
        };

        string += `null`

        return string;
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

test.append('cats');

test.append('fzfzfzfzfzfz');

test.append('stephanne');


console.log('at index 2 in the 0-indexed list:');
console.log(test.at(2));

test.pop();

console.log('the linked list contains jhonathan:');
console.log(test.contains('jhonathan'));

console.log('-----------------');
console.log('the index of jhonathan is: (zero indexed list)');
console.log(test.find('jhonathan'));

console.log('--------------------------------------');
console.log('the list visualized:');
console.log(test.toString());