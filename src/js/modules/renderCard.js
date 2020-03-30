
const render = {
  newCard: null,
  allCards: document.querySelector('.result-cards'),
  createCard() {
    const card = document.createElement("div"); // карточка
    card.classList.add("result-cards__item"); // присваиваем класс

    const cardId = document.createElement("p"); // id
    cardId.classList.add("result-cards__item-id"); // присваиваем класс

    const cardTittle = document.createElement("p"); // обертка ссылки
    cardTittle.classList.add("result-cards__item-tittle"); // присваиваем класс

    const cardCompleted = document.createElement("p"); // completed
    cardCompleted.classList.add("result-cards__item-completed"); // присваиваем класс

    const cardImg = document.createElement("img");
    cardImg.classList.add("result-cards__item-img");
    cardImg.setAttribute('src', '/assets/img/r.png');

    card.append(cardId, cardTittle, cardCompleted, cardImg); //наполняем карточку

    this.newCard = card;
  },
  drawCards(items) {
    this.allCards.innerHTML = "";
    let idUser;
    let titleUser;
    let completedUser;

    let arr = !Array.isArray(items) ? new Array(items) : items

    if (typeof arr == 'object') {
      arr.forEach((element, index) => {
        this.createCard();
        this.newCard.setAttribute('data-index-number', index + 1);


        idUser = [...this.newCard.childNodes].find(
          x => x.className === 'result-cards__item-id');
        idUser.innerText = `id: ${arr[index].id}`;


        titleUser = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-tittle');
        titleUser.innerText = `title: ${arr[index].title}`;

        completedUser = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-completed');
        completedUser.innerText = `status completed: '${arr[index].completed}'`;

        this.allCards.appendChild(this.newCard);
      });
    } else {
      console.error('...');
    }
  }
}
export default render;

