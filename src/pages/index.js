import './index.css';
import  Api  from '../components/Api.js'
import {FormValidator} from '../components/FormValidator.js';
import {Card} from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirmDelete from "../components/PopupConfirmDelete.js";
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
  popupDeleteCard,
  avatarProfileContainer,
  avatarPopup,
  avatarInput,
  avatarForm,
  buttonCardSunmit,
  buttonAvatarSubmit,
  buttonProfileSubmit,
  id
} from '../utils/variables.js';


// пРофельный апи
const profileApi= new Api ({
  url: "https://nomoreparties.co/v1/cohort-29",
  headers: {
    authorization: "10765781-c34f-49ea-91c2-5a34ebcb851f",
    "content-type": "application/json"
  }
})
// вставка в размету данных с Апи
const profileApiDom =  profileApi.getUserInfo();
profileApiDom.then((data) => {
  profileName.textContent = data.name;
  profileJob.textContent = data.about;
  profileAvatar.src = data.avatar;
  id.textContent = data._id;
})

// карточный Апи
const cardApi = new Api( {
  url: "https://mesto.nomoreparties.co/v1/cohort-29",
  headers: {
    authorization: "10765781-c34f-49ea-91c2-5a34ebcb851f",
    "content-type": "application/json"
  }
})
  //  отрисовка карточек с сервера
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
// экземпляр  попапа удаления карточки
const  deleteCardPopup = new PopupConfirmDelete(popupDeleteCard)


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
          card.likesCounterUpdate(res.likes.length)
        })
    } else {
      cardApi.putLikeCard(card.getIdCard()).then((res) => {
        card.likeOn()
        card.likesCounterUpdate(res.likes.length)
        console.log(res.likes.length)
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

//экзенмляр клаасса Юзер инфа с селекторами
const  userInfo = new UserInfo({
  name: profileName,
  job: profileJob
})



// экземпляр класса с формой профиля  с сабмитом + саб на серв
const  popupProfile = new PopupWithForm(profilePopup,  {
  callbackFormSubmit: (userInfo)=> {
    buttonProfileSubmit.textContent = 'Сохранение...'
    const  user = new UserInfo({
      name: profileName,
      job: profileJob
    })
    setTimeout(function () {
      user.setUserInfo(userInfo)
      profileApi.pathUserData(profileName, profileJob)
      popupProfile.close()
    }, 1000)
  }
})

// костанта для  передачи значений в попап при  открытии,сброс валиды
const profilePopupValues = () => {
  buttonProfileSubmit.textContent = 'Сохранить'
  const  userData = userInfo.getUserInfo()
  profileNameInput .value= userData.name;
  profileJobInput .value= userData.job;
  profileValidate.resetValidation()
  popupProfile.open()
}

//Сабмит новой карточки по попапу + отправка карточки на серв
const cardPopupForm = new PopupWithForm(cardPopup, {
  callbackFormSubmit: () => {
    buttonCardSunmit.textContent = 'Создание...'
    const newCard = {
      name: popupCardTitleInput.value,
      link: popupCardLinkInput.value,
      likes: [],
      owner: {
        _id: '0804464b7a75df5c8f503460'
      }
    }
    const cardElement = createCard(newCard)
    setTimeout(function () {
      cardApi.postCardData(newCard)
      cardsSection.prepend(cardElement)
      cardPopupForm.close()
    }, 1000)
      }
    })

//Сабмит нового аватара на страницу и на серв
const  avatarPopupForm= new PopupWithForm(avatarPopup, {
  callbackFormSubmit: () => {
    buttonAvatarSubmit.textContent = 'Сохранение...'
    profileApi.patchAvatar(avatarInput.value).then((res) => {
      setTimeout(function () {
        profileAvatar.src = avatarInput.value;
        avatarPopupForm.close()
      },1000)
    })
  }
})

// запихнул функции в функцию (тоже самое, что для профиля)
const cardPopupValues = ()=> {
  buttonCardSunmit.textContent = 'Создать'
  cardFormElement.resetValidation()
  cardPopupForm.open()
}
// Same...
const  avatarPopupvalues =() => {
  avatarPopupValidity.resetValidation()
  buttonAvatarSubmit.textContent = 'Сохранить'
  avatarPopupForm.open()
}
//вызов метода лиснеров классов попапов
deleteCardPopup.setEventListeners()
avatarPopupForm.setEventListeners()
popupProfile.setEventListeners()
cardPopupForm.setEventListeners()
imagePopupClass.setEventListeners()

//Лиснеры на кнопки
avatarProfileContainer.addEventListener('click', avatarPopupvalues)
editButton.addEventListener('click', profilePopupValues);
addCardButton.addEventListener('click', cardPopupValues)

//Вад=лидация форм попапов
const avatarPopupValidity = new FormValidator(validitySelectorList, avatarForm);
avatarPopupValidity.enableValidation()
const profileValidate = new FormValidator(validitySelectorList, profileFormElement );
profileValidate.enableValidation();
const cardFormElement = new FormValidator(validitySelectorList, cardForm);
cardFormElement.enableValidation();
