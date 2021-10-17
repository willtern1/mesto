import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  addCardButton,
  cardForm,
  cardPopup,
  cardsSection,
  editButton,
  imagePopup,
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
} from '../utils/variables.js';

//Функция создания карчтоки
function  createCard (item) {
  const card = new Card(item, '#template-element', {
    handleCardClick: ()=> {
       imagePopupClass.open(item.link, item.name)
    }
  });
  return card.generateCard()
}
//Попап с картинкой экземпляр класса
const  imagePopupClass = new PopupWithImage(imagePopup);
// Отрисовка карточек с классом секшен и кард и попы с картинкой
const defaultCardList = new Section({
  items:  initialCards,
  renderer: (item) => {
    const cardElement = createCard(item)
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
        const cardElement = createCard(newCard)
        defaultCardList.addItem(cardElement)
      }
    })

// запихнул функции в функцию (тоже самое, что для профиля)
const cardPopupValues = ()=> {
  cardFormElement.resetValidation()
  cardPopupForm.open()
}
//вызов метода лиснеров классов попапов
popupProfile.setEventListeners()
cardPopupForm.setEventListeners()
imagePopupClass.setEventListeners()
//Лиснеры на кнопки
editButton.addEventListener('click', profilePopupValues);
addCardButton.addEventListener('click', cardPopupValues)
//Вад=лидация форм попапов
const profileValidate = new FormValidator(validitySelectorList, profileFormElement );
profileValidate.enableValidation();
const cardFormElement = new FormValidator(validitySelectorList, cardForm);
cardFormElement.enableValidation();
