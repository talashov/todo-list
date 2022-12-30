const addInput = document.querySelector('.add__input');
const addBtn = document.querySelector('.add__btn');
const closeBtn = document.querySelector('.close__btn');
const checkboxBtn = document.querySelector('.checkbox');

const todoBox = document.querySelector('.todo__box');

addBtn.addEventListener("click", () => {
  
  if (addInput.value.trim() === '') {
    return
  }
  
  localStorage.setItem('todo',  JSON.stringify([...getData(), addInput.value]));
  addInput.value = '';
  renderList();

});

function renderList () {
  const array = getData();

  todoBox.innerHTML = '';
  for(let i = 0; i < array.length; i++) {
    const todoItem = 
    `
      <div class="todo__item">
          <p class="todo__text">${array[i]}</p>
          <div class="todo__check">
          <input class="checkbox" type="checkbox">
          <button class="close__btn" type="button"></button>
          </div>
      </div>
    `
    todoBox.innerHTML += todoItem
  }
}

function getData () {
  const lsData = localStorage.getItem('todo')

  if (!lsData) {
    return []
  }
  
  return JSON.parse(lsData)
}
renderList();