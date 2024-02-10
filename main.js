import { linkedList } from "./linkedList.js";

console.log(linkedList());

const input = document.querySelector('#list');
const submitListBtn = document.querySelector('#list-btn');

submitListBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(input.value);
});