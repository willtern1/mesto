import {FormValidator} from './FormValidator.js'
import {Card} from "./Card.js";
import  Section from "./Section.js";
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


// Отрисовка карточек с классом секшен и кард и попы с картинкой
const defaultCardList = new Section({
  items:  initialCards,
  renderer: (item) => {
    const card = new Card(item, '#template-element', {
      handleCardClick: ()=> {
        const  imagePopupClass = new PopupWithImage(imagePopup);
        imagePopupClass.setEventListeners()
        imagePopupClass.open(item.link, item.name)
      }
    });
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, cardsSection);
defaultCardList.renderer();

//экзенмляр клаасса Юзер инфа с селекторами
const  userInfo = new UserInfo({
  name: profileName,
  job: profileJob
})

// экземпляр класса с формой  с сабмитом
const  popupProfile = new PopupWithForm(profilePopup,  {
  callbackFormSubmit: (userInfo)=> {
    const  user = new UserInfo({
      name: profileName,
      job: profileJob
    })
    user.setUserInfo(userInfo)
  }
})

// костанта для  передачи значений в попап при  открытии,сброс валиды
const profilePopupValues = () => {
  const  userData = userInfo.getUserInfo()
  profileNameInput .value= userData.name;
  profileJobInput .value= userData.job;
  profileValidate.resetValidation()
  popupProfile.open()
}

//Сабмит новой карточки по попапу
const cardPopupForm = new PopupWithForm(cardPopup, {
  callbackFormSubmit: () => {
    const newCard = {
      name: popupCardTitleInput.value,
      link: popupCardLinkInput.value
    }
    const  newCardGeneration = new Card(newCard,  '#template-element', {
      handleCardClick: () => {
        const  imagePopupClass = new PopupWithImage(imagePopup);
        imagePopupClass.setEventListeners()
        imagePopupClass.open(newCard.link, newCard.name)
      }
    })
    const cardElement = newCardGeneration.generateCard()
    cardsSection.prepend(cardElement)
  }
})
// запихнул функции в функцию (тоже самое, что для профиля)
const cardPopupValues = ()=> {
  cardFormElement.resetValidation()
  cardPopupForm.open()
}
popupProfile.setEventListeners()
cardPopupForm.setEventListeners()
//Лиснеры на кнопки
editButton.addEventListener('click', profilePopupValues);
addCardButton.addEventListener('click', cardPopupValues)
//Вад=лидация форм попапов
const profileValidate = new FormValidator(validitySelectorList, profileFormElement );
profileValidate.enableValidation();
const cardFormElement = new FormValidator(validitySelectorList, cardForm);
cardFormElement.enableValidation();
