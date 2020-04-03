// ## BrowserAPI and React
// ### Попытаться написать на чистом js
// Написать веб-приложение, которое работает с API предостовляемое сервисом https://jsonplaceholder.typicode.com.
// К примеру это получение данных, рендер в виде каки-то элементов, возможность удаление  и добалвения (сервер не удаляет и добавляет, эти операции являются фейковым ионпросто отправляет обратно 200 код ответа)

import render from './modules/renderCard';

const inputFind = document.querySelector('.find__input');
const btnFindOne = document.querySelector('.find__btn');
const btnFindAll = document.querySelector('.result-find__btnAll');

const btnDelete = document.querySelector('.result-delete__btn');

const url = 'https://jsonplaceholder.typicode.com/todos';

let saveLocalStorage = JSON.parse(localStorage.getItem("cards")) || [];
if (saveLocalStorage) render.drawCards(saveLocalStorage);


async function getInfo(a) {
  const res = (a.target.innerText == 'показать всех пользователей') ? await fetch(url) : await fetch(`${url}/${inputFind.value}`);
  const json = await res.json();
  localStorage.setItem("cards", JSON.stringify(json));
  render.drawCards(json);
  return json;
}

function checkField(a) {
  render.allCards.classList.remove('result-cardsAll');
  (parseInt(inputFind.value) > 0 && parseInt(inputFind.value) <= 200) ? getInfo(a) : alert(
    "Invalid number.Please enter a number between(1 - 200)");
}

function allDelete() {
  render.allCards.innerHTML = '';
  inputFind.value = "";
  saveLocalStorage = [];
  render.sectionDelete.classList.remove('result-delete__active');
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
})

