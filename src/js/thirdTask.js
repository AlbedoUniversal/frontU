// ## BrowserAPI and React
// ### Попытаться написать на чистом js
// Написать веб-приложение, которое работает с API предостовляемое сервисом https://jsonplaceholder.typicode.com.
// К примеру это получение данных, рендер в виде каки-то элементов, возможность удаление  и добалвения (сервер не удаляет и добавляет, эти операции являются фейковым ионпросто отправляет обратно 200 код ответа)

import render from './modules/renderCard';

const inputFind = document.querySelector('.find__input');
const btnFindOne = document.querySelector('.find__btn');
const btnFindAll = document.querySelector('.result-find__btnAll');
const sectionDelete = document.querySelector('.result-delete');
const btnDelete = document.querySelector('.result-delete__btn');

const url = 'https://jsonplaceholder.typicode.com/todos';

let saveLocalStorage = JSON.parse(localStorage.getItem("cards")) || [];
if (localStorage.getItem("cards")) render.drawCards(saveLocalStorage);


async function getInfo(a) {
  let res = (a.target.innerText == 'показать всех пользователей') ? await fetch(url) : await fetch(`${url}/${inputFind.value}`);
  let json = await res.json();
  saveLocalStorage = json;
  localStorage.setItem("cards", JSON.stringify(saveLocalStorage));
  JSON.parse(localStorage.getItem("cards"));
  render.drawCards(json);
  sectionDelete.classList.add('result-delete__active');
}

function checkField(a) {
  render.allCards.classList.remove('result-cardsAll');
  (parseInt(inputFind.value) > 0) ? getInfo(a) : alert(
    "Invalid number.Please enter a number between(1 - 200)");
}

function allDelete() {
  render.allCards.innerHTML = '';
  sectionDelete.classList.remove('result-delete__active');
  localStorage.removeItem("cards");
}

btnFindAll.addEventListener('click', (e) => {
  getInfo(e);
  render.allCards.classList.add('result-cardsAll');
});

btnFindOne.addEventListener('click', (e) => {
  checkField(e);
});

btnDelete.addEventListener('click', () => {
  allDelete();
  inputFind.value = "";

})

