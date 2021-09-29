import {FormValidator} from './FormValidator.js'
import {Card} from "./Card.js";
import {
  addCardButton,
  cardForm,
  cardPopup,
  cardsSection,
  editButton,
  initialCards,
  popupCardLinkInput,
  popupCardTitleInput,
  profileFormElement,
  profileJob,
  profileJobInput,
  profileName,
  profileNameInput,
  profilePopup,
  validitySelectorList
} from './variables.js';

//вызов метода класса кард для массива карточек
initialCards.forEach((card) => {
  createCard(card);
  cardsSection.prepend(createCard(card)); // пихаем карточку в конец блока
})

function createCard(card) {
  const newCard = new Card (card, '#template-element');//Создаём класс дял каждой карточки,передаём темплейт,
  return newCard.generateCard();
}

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
  createCard(newCard);
  cardsSection.prepend(createCard(newCard)); // пихаем карточку в конец блока
  closePopup(cardPopup);
  cardForm.reset();
}
//Лиснеры на кнопки
editButton.addEventListener('click', () => {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  profileValidate.resetValidation() //сброс формы
  openPopup(profilePopup)});
profileFormElement.addEventListener('submit', submitProfileForm);
addCardButton.addEventListener('click', () => {
  cardFormElement.resetValidation(); //сброс формы
  openPopup(cardPopup)
});
cardForm.addEventListener('submit', submitCardForm);
//Вад=лидация форм попапов
const profileValidate = new FormValidator(validitySelectorList, profileFormElement );
profileValidate.enableValidation();
const cardFormElement = new FormValidator(validitySelectorList, cardForm);
cardFormElement.enableValidation();
