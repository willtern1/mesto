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
  profileFormElement,
  profileJob,
  profileJobInput,
  profileName,
  profileAvatar,
  profileNameInput,
  profilePopup,
  validitySelectorList,
  popupDeleteCard,
  openUpdateAvatarPopupBtn,
  avatarPopup,
  avatarForm,
  id,
  musicButton,
  audio
} from '../utils/variables.js';
import renderLoading from  '../utils/utils'


// экза апи
const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-29",
  headers: {
    authorization: "10765781-c34f-49ea-91c2-5a34ebcb851f",
    "content-type": "application/json"
  }
})

Promise.all([api.getUserInfo(), api.getCardsInfo()])
  .then(([user, cards]) => {
    id.textContent = user._id;
    userInfo.setUserInfo(user);
    cardList.renderItems(cards)
  }).catch((err) => {
    alert(`Не удалось загрезить данные, ошибка : ${err.status}`)
})

//экземпляр класса секшен
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardsSection);

// экземпляр  попапа удаления карточки
const  deleteCardPopup = new PopupConfirmDelete(popupDeleteCard)


//Функция создания карчтоки
function  createCard (item) {
  const card = new Card(item, '#template-element',id.textContent,{
    handleCardClick: ()=> {
       popupImage.open(item.link, item.name)
    },
    handleLikeClick: () => {
    if (card._isLiked) {
        api.deleteLike(card.getIdCard()).then((res) => {
          card.likeOff()
          card.likesCounterUpdate(res.likes.length)
        }).catch((err) => {
          alert(`Ошибченко : ${err.status}`)
        })
    } else {
      api.putLikeCard(card.getIdCard()).then((res) => {
        card.likeOn()
        card.likesCounterUpdate(res.likes.length)
      }).catch((err) => {
        alert(`ОшибОчка: ${err.status}`)
      })
    }
    },
    handleDeleteIconClick: () => {
      deleteCardPopup.submitDeleteCard(() => {
        api.deteleCard(card).then(() => {
          card.deleteCard()
          deleteCardPopup.close()
        }).catch((err) => {
          alert(`Ошибася : ${err.status}`)
        })
      })
      deleteCardPopup.open()
    }
  });
  return card.generateCard()
}
//Попап с картинкой экземпляр класса
const  popupImage = new PopupWithImage(imagePopup);

//экзенмляр клаасса Юзер инфа с селекторами
const  userInfo = new UserInfo({
  name: profileName,
  job: profileJob,
  avatar: profileAvatar,
  id: id
})

// экземпляр класса с формой профиля  с сабмитом + саб на серв
const  popupProfile = new PopupWithForm(profilePopup,  {
  callbackFormSubmit: (data)=> {
    renderLoading(true, profilePopup)
      api.pathUserData(data).then((res) => {
        userInfo.setUserInfo(res)
        popupProfile.close()
      }).catch((err) => {
        popupProfile.open()
        alert(`Ошибка при отправке данных на сервер ${err.status}`)
      }).finally(() => {
        renderLoading(false, profilePopup)
      })
  }
})

// костанта для  передачи значений в попап при  открытии,сброс валиды
const openEditProfilePopup = () => {
  const  userData = userInfo.getUserInfo()
  profileNameInput .value= userData.name;
  profileJobInput .value= userData.job;
  validatorEditProfile.resetValidation()
  popupProfile.open()
}

//Сабмит новой карточки по попапу + отправка карточки на серв
const cardPopupForm = new PopupWithForm(cardPopup, {
  callbackFormSubmit: (data) => {
      renderLoading(true, cardPopup)
      api.postCardData(data).then((res) => {
        cardList.addItemPrepend(createCard(res))
        cardPopupForm.close()
      }).catch((err) => {
        alert(`А не добавить карточку, ошибка :${err.status}`)
      }).finally(() => {
        renderLoading(false, cardPopup)
      })
      }
    })

//Сабмит нового аватара на страницу и на серв
const  avatarPopupForm= new PopupWithForm(avatarPopup, {
  callbackFormSubmit: (data) => {
    renderLoading(true, avatarPopup)
    api.patchAvatar(data).then((res) => {
        userInfo.setUserInfo(res)
        avatarPopupForm.close()
    }).catch((err) => {
      alert(`Не удалось обновить аватар , ошибка : ${err.status}`)
    }).finally(()=> {
      renderLoading(false, avatarPopup)
    })
  }
})

// запихнул функции в функцию (тоже самое, что для профиля)
const openAddCardPopup = ()=> {
  validatorAddCard.resetValidation()
  cardPopupForm.open()
}
// Same...
const  openUpdateAvatarPopup =() => {
  validatorUpdateAvatar.resetValidation()
  avatarPopupForm.open()
}
//вызов метода лиснеров классов попапов
deleteCardPopup.setEventListeners()
avatarPopupForm.setEventListeners()
popupProfile.setEventListeners()
cardPopupForm.setEventListeners()
popupImage.setEventListeners()

//Лиснеры на кнопки
openUpdateAvatarPopupBtn.addEventListener('click', openUpdateAvatarPopup)
editButton.addEventListener('click', openEditProfilePopup);
addCardButton.addEventListener('click', openAddCardPopup)

//Вад=лидация форм попапов
const validatorUpdateAvatar = new FormValidator(validitySelectorList, avatarForm);
validatorUpdateAvatar.enableValidation()
const validatorEditProfile = new FormValidator(validitySelectorList, profileFormElement );
validatorEditProfile.enableValidation();
const validatorAddCard = new FormValidator(validitySelectorList, cardForm);
validatorAddCard.enableValidation();

//фоновая музыка
musicButton.addEventListener('click',  () => {
  if (musicButton.classList.contains('body__music-icon_on')) {
    musicOff()
  } else   {
      musicOn()
  }
})
function musicOn () {
  musicButton.classList.add('body__music-icon_on')
  audio.volume = 0.2;
  audio.play()
}
function musicOff () {
  musicButton.classList.remove('body__music-icon_on')
  audio.pause()
}
