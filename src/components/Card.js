export class Card {
  constructor(data, elementTemplate, userId,{handleCardClick, handleLikeClick, handleDeleteIconClick}) {
    this._name = data.name;
    this._link = data.link;
    this._likes =data.likes;
    this._id = data._id;
    this._owner = data.owner;
    this._userId = userId;
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
    this._trashButton()
    this._like()

    // Добавим данные
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    this._likeButton = this._element.querySelector('.element__button');
    this._likesCounter = this._element.querySelector('.element__button-likes-counter');
    this._likesCounter.textContent = this._likes.length
    // Вернём элемент наружу
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__button').addEventListener('click', this._handleLikeClick);
    this._element.querySelector('.element__trash-button').addEventListener('click', this._handleDeleteIconClick);
    this._element.querySelector('.element__image').addEventListener('click', this._handleCardClick);
    this.likesCounterUpdate()
    this._likeCheked()
  }

  _trashButton () {
    if (this._userId !== this._owner._id) {
      this._element.querySelector('.element__trash-button').style.display = 'none';
    }
  }
  _like() {
  if (this._likes.some((like) => like._id === this._userId)) {
    this.likeOn()
  } else {
    this.likeOff()
  }
  }
  likeOn() {
    // this._likeButton.classList.add('element__button_active');
    this._element.querySelector('.element__button').classList.add('element__button_active')
    this._isLiked = true
  }
  likeOff() {
    this._element.querySelector('.element__button').classList.remove('element__button_active')
    this._isLiked = false
  }
  deleteCard() {
    this._element.remove();
    this._element = null;
  }
  getIdCard () {
    return this._id
  }
  likesCounterUpdate(data) {
    this._likesCounter = data
    this._element.querySelector('.element__button-likes-counter').textContent =   this._likesCounter
  }
  _likeCheked () {
    if (this._likes._id === this._userId) {
      this._likeButton.classList.add('element__button_active');
    }
  }
}
