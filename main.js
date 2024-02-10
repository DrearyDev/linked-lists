import { linkedList } from "./linkedList.js";

console.log(linkedList());

const input = document.querySelector('#list');
const submitListBtn = document.querySelector('#list-btn');

function validateList(inputValue) {
    inputValue = inputValue.replace(/ /g, '');// remove all spaces
    inputValue = inputValue.replace(/,,/g, '');// remove two commas in a row

    return inputValue;
};

submitListBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(validateList(input.value));
    input.value = '';
});