import {imagePopup, popupImagePicture, popupImageTitle, openPopup} from './index.js';

const initialCards = [
  {
    name: 'Враг',
    link: 'https://i.yapx.ru/OUGUQ.jpg'
  },
  {
    name: 'Пленницы',
    link: 'https://i.yapx.ru/OUGUT.jpg'
  },
  {
    name: 'Убийца',
    link: 'https://i.yapx.ru/OUGUW.jpg'
  },
  {
    name: 'Прибытие',
    link: 'https://i.yapx.ru/OUGUd.png'
  },
  {
    name: 'Бегущий по лезвию 2049',
    link: 'https://i.yapx.ru/OUGRZ.png'
  },
  {
    name: 'Дюна',
    link: 'https://i.yapx.ru/OUGUZ.jpg'
  },
];


class Card {
  constructor(data, elementTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._elementTemplate = elementTemplate;
  }
  _getTemplate() {
    let cardElement;
    cardElement = document
      .querySelector(this._elementTemplate)
      .content
      .cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }
  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();

    // Добавим данные
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__button').addEventListener('click', this._likeClick);
    this._element.querySelector('.element__trash-button').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__image').addEventListener('click', this._popupImage);
  }
  _likeClick(evt) {
    evt.target.classList.toggle('element__button_active');
  }
  _deleteCard(evt) {
    evt.target.closest('.element').remove();
  }
  _popupImage = () => {
    openPopup(imagePopup);
    popupImagePicture.src = this._link;
    popupImageTitle.textContent = this._name;
    popupImagePicture.alt = this._name;
  }
}

initialCards.forEach((card) => {
  const newCard = new Card (card, '#template-element'); //Создаём класс дял каждой карточки,передаём темплейт,
  const cardsSection = document.querySelector('.elements'); // находим блок для карточек
  const cardElement = newCard.generateCard(); //пихаем метод класса Card в переменную
  cardsSection.prepend(cardElement); // пихаем карточку в конец блока
})
