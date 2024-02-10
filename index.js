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
    };

    const prepend = (value) => {
        let nodeInList = node();
        nodeInList.value = value;

        if (head) { nodeInList.nextNode = head };

        head = nodeInList;

        size++;
    };

    const at = (index) => {
        if (index > size || index < 0) { throw 'index is out of bounds' };

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
        if (index > size || index < 0) { throw 'index is out of bounds' };

        let nodeInList = node();
        nodeInList.value = value;

        let current = head;
        let i = 0;

        if (index === 0) {
            nodeInList.nextNode = current
            head = nodeInList;
        } else {
            while (i < (index - 1)) {
                current = current.nextNode;
                i++;
            };

            nodeInList.nextNode = current.nextNode;
            current.nextNode = nodeInList;
        };

        size++;
    };

    const removeAt = (index) => {
        if (index > (size-1) || index < 0) { throw 'index is out of bounds' };

        let current = head;
        let i = 0;
        let before = head;

        if (index === 0) {
            head = head.nextNode;
        } else {
            while (i < index) {
                current = current.nextNode;

                if (i === (index-2)) {
                    before = current;
                };

                i++;
            };

            before.nextNode = current.nextNode;
        };

        size--;
    };

    return { head, tail, size, append, prepend, at, pop, contains, find, toString, insertAt, removeAt };
};

export { linkedList };