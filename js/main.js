const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
//use this underneath for local storage
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//use this underneath for local storage
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


//The const above is just setting up variables for the elements just like document.getElementById

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //use this underneath for local storage
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));

  liMaker(input.value);
  input.value = "";
});


data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear(); //clears list and local storage
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
