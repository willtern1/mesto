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
  buttonCardSunmit,
  buttonAvatarSubmit,
  buttonProfileSubmit,
  id
} from '../utils/variables.js';


// экза апи
const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-29",
  headers: {
    authorization: "10765781-c34f-49ea-91c2-5a34ebcb851f",
    "content-type": "application/json"
  }
})
// вставка в размету данных с Апи
api.getUserInfo().then((data) => {
  userInfo.setUserInfo(data)
})

//экземпляр класса секшен
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardsSection);

//отрисовка карт с сервера
api.getCardsInfo().then((data) => {
   cardList.renderItems(data)
}).catch((err) => {
  alert(`Ошибка загрузки карточек : ${err.status}`)
})

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
        console.log(res.likes.length)
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
//Функция изменения кнопки при сабмите
function renderLoading(loading) {
if (loading === true) {
  buttonProfileSubmit.textContent = 'Сохранение...'
  buttonCardSunmit.textContent = 'Создание...'
  buttonAvatarSubmit.textContent = 'Сохранение...'
}else {
  buttonProfileSubmit.textContent = 'Сохранить'
  buttonCardSunmit.textContent = 'Создать'
  buttonAvatarSubmit.textContent = 'Сохранить'
}
}


// экземпляр класса с формой профиля  с сабмитом + саб на серв
const  popupProfile = new PopupWithForm(profilePopup,  {
  callbackFormSubmit: (data)=> {
    renderLoading(true)
      api.pathUserData(data).then((res) => {
        userInfo.setUserInfo(res)
        popupProfile.close()
      }).catch((err) => {
        popupProfile.open()
        alert(`Ошибка при отправке данных на сервер ${err.status}`)
      }).finally(() => {
        renderLoading(false)
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
      renderLoading(true)
      api.postCardData(data).then((res) => {
        cardList.addItemPrepend(createCard(res))
        cardPopupForm.close()
      }).catch((err) => {
        alert(`А не добавить карточку, ошибка :${err.status}`)
      }).finally(() => {
        renderLoading(false)
      })
      }
    })

//Сабмит нового аватара на страницу и на серв
const  avatarPopupForm= new PopupWithForm(avatarPopup, {
  callbackFormSubmit: (data) => {
    console.log(data)
    renderLoading(true)
    api.patchAvatar(data).then((res) => {
        userInfo.setUserInfo(res)
        avatarPopupForm.close()
    }).catch((err) => {
      alert(`Не удалось обновить аватар , ошибка : ${err.status}`)
    }).finally(()=> {
      renderLoading(false)
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
