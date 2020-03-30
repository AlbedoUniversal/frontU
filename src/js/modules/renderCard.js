
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

    card.append(cardId, cardTittle, cardCompleted); //наполняем карточку

    this.newCard = card;
  },
  drawCards(items) {

    this.allCards.innerHTML = "";

    let idUser;

    let titleUser;

    let completedUser;

    if (Array.isArray(items)) {
      items.forEach((element, index) => {
        this.createCard();
        this.newCard.setAttribute('data-index-number', index + 1);


        idUser = [...this.newCard.childNodes].find(
          x => x.className === 'result-cards__item-id');
        idUser.innerText = `id: ${items[index].id}`;


        titleUser = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-tittle');
        titleUser.innerText = `title: ${items[index].title}`;

        completedUser = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-completed');
        completedUser.innerText = `status completed: '${items[index].completed}'`;

        this.allCards.appendChild(this.newCard);
      });
    } else if (typeof items == 'object') {
      this.createCard();


      idUser = [...this.newCard.childNodes].find(
        x => x.className === 'result-cards__item-id');
      idUser.innerText = `id: ${items.id}`;

      titleUser = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-tittle');
      titleUser.innerText = `title: ${items.title}`;


      completedUser = [...this.newCard.childNodes].find(x => x.className === 'result-cards__item-completed');
      completedUser.innerText = `status completed: '${items.completed}'`;
      this.allCards.appendChild(this.newCard);
    } else {
      console.error('...');
    }


    //   if (allCards.innerHTML != "")
    //     document.querySelector(".deletePrev").classList.add("active");
    // }
  }
}
export default render;

