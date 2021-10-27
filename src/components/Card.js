import {toArray} from "core-js/internals/async-iterator-iteration";

export class Card {
  constructor(data, elementTemplate, {handleCardClick, handleLikeClick, handleDeleteIconClick}) {
    this._name = data.name;
    this._link = data.link;
    this._likes =data.likes;
    this._id = data._id;
    this._owner = data._owner;
    this._elementTemplate = elementTemplate;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;

  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._elementTemplate)
      .content
      .querySelector('.element')
      .cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }
  generateCard() {
    // Запишем разметку в приватное поле _element.
    this._element = this._getTemplate();
    const image = this._element.querySelector('.element__image')
    this._setEventListeners();

    // Добавим данные
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    this._likesCounter = this._element.querySelector('.element__button-likes-counter');
    this._deleteButton - this._element.querySelector('.element__trash-button');
    console.log(this._likes.length)
    this._likesCounter.textContent = this._likes.length
    // Вернём элемент наружу
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__button').addEventListener('click', this._handleLikeClick);
    this._element.querySelector('.element__trash-button').addEventListener('click', this._handleDeleteIconClick);
    this._element.querySelector('.element__image').addEventListener('click', this._handleCardClick);
  }

  // _likeClick(evt) {
  //   evt.target.classList.toggle('element__button_active');
  // }
  // _deleteCard() {
  //   this._element.remove()
  // }
  // _popupImage = () => {
  //   imagePopupClass.open(this._link, this._name);
  //   // openPopup(imagePopup);
  //   // popupImagePicture.src = this._link;
  //   // popupImageTitle.textContent = this._name;
  //   // popupImagePicture.alt = this._name;
  // }
}
