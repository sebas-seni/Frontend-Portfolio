//Variables
const input = document.querySelector(".item-input");

const needBtn = document.querySelector('.need-btn');
const haveBtn = document.querySelector('.have-btn');
const clearListBtn = document.querySelector('.clear-list');

const needAndHaveContainer = document.querySelector('list-group');
const needItemContainer = document.querySelector('.list-need');


const haveItemContainer = document.querySelector('.list-have');




cargarEventListeners()

function cargarEventListeners() {
  needBtn.addEventListener('click', addNeed);

  haveBtn.addEventListener('click', addHave);

  clearListBtn.addEventListener('click', clearList);
}



//Funciones

function settingAttributes(container) {

  let createList = document.createElement("li");

  createList.classList.add('list-group-item');

  createList.innerHTML = `
					<label class="form-check-label" for="firstCheckboxStretched">${input.value}</label>
          <img src="/images/cerrar.png" class="rounded float-end" alt="Cross" onclick="parentElement.remove()">
    `

  container.insertAdjacentElement('beforeend', createList);

  input.value = '';

}


function addNeed() {

  if (input.value !== '') {
    settingAttributes(needItemContainer);
  } else {
    alert('Please, add an item to your list');
  }

}

function addHave() {

  if (input.value !== '') {
    settingAttributes(haveItemContainer);
  } else {
    alert('Please, add an item to your list');
  }

}

function clearList() {
    while (needItemContainer.firstChild || haveItemContainer.firstChild) {
      needItemContainer.innerHTML = '';
      haveItemContainer.innerHTML = '';
    }

}