import { linkedList } from "./linkedList.js";

console.log(linkedList());

const input = document.querySelector('#list');
const submitListBtn = document.querySelector('#list-btn');
const stringOutput = document.querySelector('.output .string');

const interactionDiv = document.querySelector('.interaction');
interactionDiv.style.display = 'none';

let linked;

function createLinkedList(listarr) {
    linked = linkedList();

    for (let i in listarr) {
        linked.append(listarr[i]);
    };

    interactionDiv.style.display = 'block';

    return linked.toString();
};

function validateList(inputValue) {
    inputValue = inputValue.replace(/ /g, '');// remove all spaces
    inputValue = inputValue.replace(/,,/g, '');// remove two commas in a row
    inputValue = inputValue.replace(/,$/g, '');// remove trailing comma

    return inputValue.split(',');
};

submitListBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let listArr = validateList(input.value);
    stringOutput.innerText = createLinkedList(listArr);
    input.value = '';
});