import {FormValidator} from './FormValidator.js'
import {Card} from "./Card.js";
import  Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import {
  addCardButton,
  cardForm,
  cardPopup,
  cardsSection,
  editButton, imagePopup,
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

const user = ({
  name: '.profile__name',
  job: '.profile__job'
})


// Отрисовка карточек с классом секшен и кард
const defaultCardList = new Section({
  items:  initialCards,
  renderer: (item) => {
    const card = new Card(item, '#template-element');
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, cardsSection);
defaultCardList.renderer();

//ImagePopup
export const  imagePopupClass = new PopupWithImage(imagePopup);


const  userInfo = new UserInfo({
  name: profileName,
  job: profileJob
})
const profilePopupValues = () => {
  const  userData = userInfo.getUserInfo()
  profileNameInput .value= userData.name;
  profileJobInput .value= userData.job;
  profileValidate.resetValidation()
  popupProfile.open()
}

const  popupProfile = new PopupWithForm(profilePopup,  {
  submit: (userInfo)=> {
    const  lul = new UserInfo({
      name: profileName ,
      job: profileJob
    })
    lul.setUserInfo(userInfo)
  }
})
// // Закрытие поп по Escape
// function closePopupEsc(evt){
//   if (evt.key === "Escape") {
//     closePopup(document.querySelector('.popup_opened'));
//   }
// }

// //Закрытие попы по оверлею и кретику
// function closePopupOver(evt){
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
//     closePopup(document.querySelector('.popup_opened'));
//   }
// }
//
// //Функция открытия попы
// export function openPopup(event) {
//   event.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEsc);
//   document.addEventListener('click', closePopupOver)
// }
//
// //Функция закрытия попы
// function closePopup(event){
//   event.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEsc);
//   document.removeEventListener('click', closePopupOver);
// }

// //Функция сохранения и отправки значений в профиль
// function submitProfileForm (event) {
//   event.preventDefault();
//
//   profileName.textContent = profileNameInput.value;
//   profileJob.textContent = profileJobInput.value;
//   closePopup(profilePopup);
// }
//
// function  submitCardForm (event) {
//   event.preventDefault();
//
//    const newCard = {
//      name: popupCardTitleInput.value,
//      link: popupCardLinkInput.value
//   }
//   createCard(newCard);
//   cardsSection.prepend(createCard(newCard)); // пихаем карточку в конец блока
//   closePopup(cardPopup);
//   cardForm.reset();
// }
//Лиснеры на кнопки
editButton.addEventListener('click', profilePopupValues);
addCardButton.addEventListener('click', () => {
  cardFormElement.resetValidation(); //сброс формы
  const openCardPopup = new Popup(cardPopup);
  openCardPopup.open();
});
//Вад=лидация форм попапов
const profileValidate = new FormValidator(validitySelectorList, profileFormElement );
profileValidate.enableValidation();
const cardFormElement = new FormValidator(validitySelectorList, cardForm);
cardFormElement.enableValidation();
