import {FormValidator} from './FormValidator.js'
import {Card} from "./Card.js";
import {
  editButton,
  profilePopup,
  profileFormElement,
  profileNameInput,
  profileJobInput,
  profileName,
  profileJob,
  popupCardTitleInput,
  popupCardLinkInput,
  cardForm,
  addCardButton,
  cardPopup,
  validitySelectorList,
  initialCards
} from './variables.js';

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

