
import sectionDelete from '../thirdTask';
const render = {
  newCard: null,
  allCards: document.querySelector('.result-cards'),
  sectionDelete: document.querySelector('.result-delete'),
  createCard() {
    const card = document.createElement("div"); // карточка
    card.classList.add("result-cards__item"); // присваиваем класс

    const cardNumber = document.createElement("p"); // id
    cardNumber.classList.add("result-cards__item-id"); // присваиваем класс

    const cardTittle = document.createElement("p"); // обертка ссылки
    cardTittle.classList.add("result-cards__item-tittle"); // присваиваем класс

    const cardCheck = document.createElement("input");
    cardCheck.classList.add('result-cards__item-check');
    cardCheck.setAttribute('type', 'checkbox');
    cardCheck.setAttribute('name', 'checkAddress');

    const cardBtnDelete = document.createElement("button"); // completed
    cardBtnDelete.classList.add("result-cards__item-delete"); // присваиваем класс
    cardBtnDelete.innerText = 'delete';

    const cardImg = document.createElement("img");
    cardImg.classList.add("result-cards__item-img");
    cardImg.setAttribute('src', '/assets/img/r.png');

    card.append(cardNumber, cardTittle, cardCheck, cardBtnDelete, cardImg); //наполняем карточку

    this.newCard = card;
  },
  drawCards(items) {
    this.allCards.innerHTML = "";
    let numberTodo,
      titleTodo,
      btnDeleteCard,
      checkCard;

    let arr = !Array.isArray(items) ? new Array(items) : items


    if (typeof arr == 'object') {
      arr.forEach((element, index) => {
        this.createCard();
        this.newCard.setAttribute('data-index-number', index + 1);

        numberTodo = [...this.newCard.childNodes].find(
          x => x.className === 'result-cards__item-id');
        numberTodo.innerText = `Todoshka N${arr[index].id}`;

        titleTodo = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-tittle');
        titleTodo.innerText = `title: ${arr[index].title}`;

        checkCard = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-check');

        if (arr[index].completed === true) {
          titleTodo.classList.add('trough-text');
          checkCard.setAttribute('checked', '');
        }

        checkCard.addEventListener('click', () => {
        })

        btnDeleteCard = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-delete');
        btnDeleteCard.addEventListener('click', () => {
          arr.filter(todo => {
            if (todo.id == arr[index].id) {
              arr.splice(arr.indexOf(todo), 1);
              localStorage.setItem("cards", JSON.stringify(items));
              this.drawCards(arr);
            }
          })
        })

        this.sectionDelete.classList.add('result-delete__active');

        this.allCards.appendChild(this.newCard);
      });
    } else {
      console.error('...');
    }
  }
}
export default render;

