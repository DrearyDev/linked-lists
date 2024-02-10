import { linkedList } from "./linkedList.js";

console.log(linkedList());

const input = document.querySelector('#list');
const submitListBtn = document.querySelector('#list-btn');

let linked;

function createLinkedList(listarr) {
    linked = linkedList();

    for (let i in listarr) {
        linked.append(listarr[i]);
    };

    console.log(linked.toString());
};

function validateList(inputValue) {
    inputValue = inputValue.replace(/ /g, '');// remove all spaces
    inputValue = inputValue.replace(/,,/g, '');// remove two commas in a row

    return inputValue.split(',');
};

submitListBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let listArr = validateList(input.value);
    createLinkedList(listArr);
    input.value = '';
});