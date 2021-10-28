import './index.css';
import  Api  from '../components/Api.js'
import {FormValidator} from '../components/FormValidator.js';
import {Card} from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js";;
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
  profileAvatar,
  profileNameInput,
  profilePopup,
  validitySelectorList,
  popupDeleteCard
} from '../utils/variables.js';

// мутки профильные с отрисовкой на странице
const profileApi= new Api ({
  url: "https://nomoreparties.co/v1/cohort-29",
  headers: {
    authorization: "10765781-c34f-49ea-91c2-5a34ebcb851f",
    "content-type": "application/json"
  }
})
const profileApiDom =  profileApi.getUserInfo();
profileApiDom.then((data) => {
  profileName.textContent = data.name;
  profileJob.textContent = data.about;
  profileAvatar.src = data.avatar;
  id.textContent = data._id;
}).catch((err) => alert(err))
const id = [];
console.log(id)
// мутки карточные с отрисовской
const cardApi = new Api( {
  url: "https://mesto.nomoreparties.co/v1/cohort-29",
  headers: {
    authorization: "10765781-c34f-49ea-91c2-5a34ebcb851f",
    "content-type": "application/json"
  }
})
const cardApiDom = cardApi.getCardsInfo();
cardApiDom.then((data) => {

  const cardList = new Section({
    items:  data,
    renderer: (item) => {
      const cardElement = createCard(item)
      cardList.addItem(cardElement);
    }
  }, cardsSection);
  cardList.renderer();
})

  const  deleteCardPopup = new PopupConfirm(popupDeleteCard);


//Функция создания карчтоки
function  createCard (item) {
  const card = new Card(item, '#template-element',id.textContent,{
    handleCardClick: ()=> {
       imagePopupClass.open(item.link, item.name)
    },
    handleLikeClick: () => {
    if (card._isLiked) {
        cardApi.deleteLike(card.getIdCard()).then((res) => {
          card.likeOff()
          card.likesCounterUpdate(res.likes)
        })
    } else {
      cardApi.putLikeCard(card.getIdCard()).then((res) => {
        card.likeOn()
        card.likesCounterUpdate(res.likes)
      })
    }
    },
    handleDeleteIconClick: () => {
      deleteCardPopup.submitDeleteCard(() => {
        cardApi.deteleCard(card).then(() => {
          card.deleteCard()
          deleteCardPopup.close()
        })
      })
      deleteCardPopup.open()
    }
  });
  return card.generateCard()
}
//Попап с картинкой экземпляр класса
const  imagePopupClass = new PopupWithImage(imagePopup);
// Отрисовка карточек с классом секшен и кард и попы с картинкой


//экзенмляр клаасса Юзер инфа с селекторами
const  userInfo = new UserInfo({
  name: profileName,
  job: profileJob
})



// экземпляр класса с формой  с сабмитом + саб на серв
const  popupProfile = new PopupWithForm(profilePopup,  {
  callbackFormSubmit: (userInfo)=> {
    const  user = new UserInfo({
      name: profileName,
      job: profileJob
    })
    user.setUserInfo(userInfo)
    profileApi.pathUserData(profileName, profileJob)
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

//Сабмит новой карточки по попапу + отправка карточки на серв
const cardPopupForm = new PopupWithForm(cardPopup, {
  callbackFormSubmit: () => {

    const newCard = {
      name: popupCardTitleInput.value,
      link: popupCardLinkInput.value,
      likes: [],
      owner: {
        _id: '0804464b7a75df5c8f503460'
      }
    }
    const cardElement = createCard(newCard)
    cardApi.postCardData(newCard)
    cardsSection.prepend(cardElement)
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
deleteCardPopup.setEventListeners()
//Лиснеры на кнопки
editButton.addEventListener('click', profilePopupValues);
addCardButton.addEventListener('click', cardPopupValues)
//Вад=лидация форм попапов
const profileValidate = new FormValidator(validitySelectorList, profileFormElement );
profileValidate.enableValidation();
const cardFormElement = new FormValidator(validitySelectorList, cardForm);
cardFormElement.enableValidation();
