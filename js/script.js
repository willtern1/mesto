const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_element_name');
const jobInput = formElement.querySelector('.popup__input_element_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#template-element').content;
const placeAddButton = document.querySelector('.profile__button');
const placesPopupCloseButton = document.querySelector('.popup-places__close-icon');
const placesPopup = document.querySelector('.popup-places');
const placesFormElement = document.querySelector('.popup-places__form');
const placeSubmitButton = document.querySelector('.popup-places__button');
const placesNameInput = placesFormElement.querySelector('.popup-places__input_element_place-name');
const placesLinkInput = placesFormElement.querySelector('.popup-places__input_element_place-link');
const placesImage = document.querySelector('.element__image');
const placesDescription = document.querySelector('.element__text');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Мейн-кун',
    link: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Сибирская',
    link: 'https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Хаски',
    link: 'https://images.unsplash.com/photo-1543556153-5e59781a98dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=635&q=80'
  }
];


// Линейная функция с добавлением карточек из массива в html находится в константе.
const addCard = (card) => {
  const elementCopy = elementTemplate.querySelector('.element').cloneNode(true);
  elementCopy.querySelector('.element__image').src = card.link;
  elementCopy.querySelector('.element__text').textContent = card.name;
  elements.append(elementCopy);
}
// вызываем функцию аддкарт для каждого элемента массива
initialCards.forEach((card) => {
  addCard(card);
});


// Закртыие попы на ESC
//document.addEventListener ('keydown', function(event) {
//  if(event.key === 'Escape') {
//    popup.classList.remove('popup_opened');
//  }
//})
//Закрытие попы по клику фона
//  document.querySelector('.popup__container').addEventListener(
//    'click', function (event) {
//      event.stopPropagation();
//    }
//  )
//Функция открытия попы
function openPopup(){
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

//Функция закрытия попы
function closePopup(){
  popup.classList.remove('popup_opened');
}

//Функция сохранения и отправки значений в профиль
function submitForm (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function openPlacesPopup(){
  placesPopup.classList.add('popup-paces_opened')
}

function closePlacesPopup() {
  placesPopup.classList.remove('popup-paces_opened');
}

function submitPlacesForm (event) {
  event.preventDefault();
  const elementCopy = elementTemplate.querySelector('.element').cloneNode(true);
  elementCopy.querySelector('.element__image').src = placesLinkInput.value;
  elementCopy.querySelector('.element__text').textContent = placesNameInput.value;
  elements.prepend(elementCopy);
  closePlacesPopup();
}

//popup.addEventListener('click', closePopup);// слушатель закрытия попы по фону
editButton.addEventListener('click', openPopup); //слушатель открытия попы по клику на кнопку
closeButton.addEventListener('click', closePopup);//слушатель закрытия попы по клику на копку
formElement.addEventListener('submit', submitForm);//слушатель отправки значений
placeAddButton.addEventListener('click', openPlacesPopup);
placesPopupCloseButton.addEventListener('click', closePlacesPopup);
placeSubmitButton.addEventListener('click', submitPlacesForm);
