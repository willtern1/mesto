const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileFormElement = document.querySelector('.popup__form_type_edit-profile');
const profileNameInput = profileFormElement.querySelector('.popup__input_element_name');
const profileJobInput = profileFormElement.querySelector('.popup__input_element_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupCardTitleInput = document.querySelector('.popup__input_element_title');
const popupCardLinkInput = document.querySelector('.popup__input_element_link');
const cardForm = document.querySelector('.popup__form_type_add-place');
const addCardButton = document.querySelector('.profile__add-card-button');
const cardPopup = document.querySelector('.popup_type_add-place');
export const imagePopup = document.querySelector('.popup_type_image');
export const popupImagePicture = document.querySelector('.popup__picture-image');
export const popupImageTitle = document.querySelector('.popup__title-image');
const validitySelectorList =({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
import {FormValidator} from './FormValidator.js'

export const initialCards = [
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

import {Card} from "./Card.js";
//вызов метода класса кард для массива карточек
initialCards.forEach((card) => {
  const newCard = new Card (card, '#template-element'); //Создаём класс дял каждой карточки,передаём темплейт,
  const cardsSection = document.querySelector('.elements'); // находим блок для карточек
  const cardElement = newCard.generateCard(); //пихаем метод класса Card в переменную
  cardsSection.prepend(cardElement); // пихаем карточку в конец блока
})
// Закрытие поп по Escape
function closePopupEsc(evt){
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//Закрытие попы по оверлею и кретику
function closePopupOver(evt){
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
    closePopup(document.querySelector('.popup_opened'));
    cardForm.reset();
  }
}

//Функция открытия попы
export function openPopup(event) {
  event.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOver)
}

//Функция закрытия попы
function closePopup(event){
  event.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupOver);
}

//Функция сохранения и отправки значений в профиль
function submitProfileForm (event) {
  event.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profilePopup);
}

function  submitCardForm (event) {
  event.preventDefault();

   const newCard = {
     name: popupCardTitleInput.value,
     link: popupCardLinkInput.value
  }
  const lol = new Card(newCard, '#template-element');
  const cardsSection = document.querySelector('.elements');
  const cardElement = lol.generateCard(); //пихаем метод класса Card в переменную
  cardsSection.prepend(cardElement); // пихаем карточку в конец блока
  closePopup(cardPopup);
  cardForm.reset();
}
//Лиснеры на кнопки
editButton.addEventListener('click', () => {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  const profileValidate = new FormValidator(validitySelectorList, profileFormElement );
  profileValidate.enableValidation()
  openPopup(profilePopup)});
profileFormElement.addEventListener('submit', submitProfileForm);
addCardButton.addEventListener('click', () => {
  const cardFormElement = new FormValidator(validitySelectorList, cardForm);
  cardFormElement.enableValidation();
  openPopup(cardPopup)
});
cardForm.addEventListener('submit', submitCardForm);

