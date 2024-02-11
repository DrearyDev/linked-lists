import { linkedList } from "./linkedList.js";

console.log(linkedList());

const input = document.querySelector('#list');
input.value = '';
const submitListBtn = document.querySelector('#list-btn');
const stringOutput = document.querySelector('.output .string');

const interactionDiv = document.querySelector('.interaction');
interactionDiv.classList.add('hidden');

const selectMethod = document.querySelector('#method');
selectMethod.value = 'pop';

const methodUserInput = document.querySelector('#method-user-input');
methodUserInput.value = '';
methodUserInput.disabled = true;
methodUserInput.style.border = '1px solid #999';

const info = document.querySelector('.info');

const methodSubmitBtn = document.querySelector('#method-user-input-btn');

let linked;

function createLinkedList(listarr) {
    linked = linkedList();

    for (let i in listarr) {
        linked.append(listarr[i]);
    };

    interactionDiv.classList.remove('hidden');

    return linked.toString();
};

function validateMethodInput(method, input) {
    //alternative to switch statement
    let options = {
        at: function(input) {
            input = Number(input);

            if (input < 0 || input > linked.getSize() - 1) {
                methodUserInput.setCustomValidity('Index is out of bounds');
                info.innerText = methodUserInput.validationMessage;
                methodUserInput.style.border = '1px solid red';
            } else {
                methodUserInput.setCustomValidity('');
                methodUserInput.style.border = '1px solid black';

                info.innerText = linked.at(input).value;
            };
        },
        contains: function(input) {
            info.innerText = linked.contains(input);
        },
        find: function(input) {
            if (linked.find(input) === null) { info.innerText = 'not found' }
            else { info.innerText = `found at index: ${linked.find(input)}` };
        }
    }[method] ?? function(input) {
        linked[method](input);
        stringOutput.innerText = linked.toString();
    };

    options(input);
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

selectMethod.addEventListener('input', (e) => {

    if (selectMethod.value === 'pop') {
        methodUserInput.value = '';
        methodUserInput.disabled = true;
        methodUserInput.style.border = '1px solid #999';
    } else {
        methodUserInput.disabled = false;
        methodUserInput.style.border = '1px solid black';
    };
});

methodSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    validateMethodInput(selectMethod.value, methodUserInput.value);
});