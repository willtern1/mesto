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
const placesNameInput = placesFormElement.querySelector('.popup-places__input_element-place-name');
const placesLinkInput = placesFormElement.querySelector('.popup-places__input_element-place-link');
const placesImage = document.querySelector('.element__image');
const placesDescription = document.querySelector('.element__text');
const popupImage = document.querySelector('.popup-image');
const popupImageCloseIcon = document.querySelector('.popup-image__close-icon');
const popupImagePicture = document.querySelector('.popup-image__picture');
const popupImageTitle = document.querySelector('.popup-image__title');

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
  elementCopy.querySelector('.element__image').src = card.link; // Добавление значение link из массива в поле src
  elementCopy.querySelector('.element__image').alt = card.name; // Добавление значения name в поле alt
  elementCopy.querySelector('.element__text').textContent = card.name; // Добавление значение из массива в текст элемента
  elementCopy.querySelector('.element__button').addEventListener('click', (event) => {event.target.classList.toggle('element__button_active')}); // Добавление кнопки лайка со слушателем, которая меняет классы
  elementCopy.querySelector('.element__trash-button').addEventListener('click', (event) => {event.target.closest('.element').remove()}); // Кнопка удаления у карточек
  elementCopy.querySelector('.element__image').addEventListener('click', (event) => {
    popupImage.classList.add('popup-image_active'); // открытие попы с картинкой
    popupImagePicture.src = elementCopy.querySelector('.element__image').src;
    popupImagePicture.alt = elementCopy.querySelector('.element__text').textContent;                  // Добевление картинки, её альта и название в поп ап
    popupImageTitle.textContent = elementCopy.querySelector('.element__text').textContent;
  });
  popupImageCloseIcon.addEventListener('click', (event) => {popupImage.classList.remove('popup-image_active')}); // лиснер для кнопки закрытия попы с картинкой
  elements.append(elementCopy); // добавления эелема вначало
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

//Функция открытия попы профиля
function openPopup(){
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

//Функция закрытия попы профиля
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
//Функция открытия попы плейсес
function openPlacesPopup(){
  placesPopup.classList.add('popup-paces_opened')
}
// Функция закрытия попы плейса
function closePlacesPopup() {
  placesPopup.classList.remove('popup-paces_opened');
  placesFormElement.reset();
}
// Функция добавления карточки по кнопке
function submitPlacesForm (event) {
  event.preventDefault(); // выключения стандартного действи браузера
  const elementCopy = elementTemplate.querySelector('.element').cloneNode(true) // клон узла html темплейт;
  elementCopy.querySelector('.element__image').src = placesLinkInput.value;  // добавление значения из нипута в src
  elementCopy.querySelector('.element__image').alt = placesNameInput.value;
  elementCopy.querySelector('.element__text').textContent = placesNameInput.value;  // добавление значения из нипута в text
  elementCopy.querySelector('.element__button').addEventListener('click', (event) => {event.target.classList.toggle('element__button_active')}); // кнопка лайка
  elementCopy.querySelector('.element__trash-button').addEventListener('click', (event) => {event.target.closest('.element').remove()}); // кнопка удаления краточки
  elementCopy.querySelector('.element__image').addEventListener('click', (event) => {
    popupImage.classList.add('popup-image_active'); // открытие попы с картинкой
    popupImagePicture.src = elementCopy.querySelector('.element__image').src // вставка в попап значения из html
    popupImageTitle.textContent = elementCopy.querySelector('.element__text').textContent;  // вставка в попап значения из html
  });
  popupImageCloseIcon.addEventListener('click', (event) => {popupImage.classList.remove('popup-image_active')}); // закрытия попы
  elements.prepend(elementCopy); // Отправка вначало блока
  closePlacesPopup(); // функция закрытия попы
  placesFormElement.reset(); // сброс формы ну... инпутов
}

//popup.addEventListener('click', closePopup);// слушатель закрытия попы по фону
editButton.addEventListener('click', openPopup); //слушатель открытия попы по клику на кнопку
closeButton.addEventListener('click', closePopup);//слушатель закрытия попы по клику на копку
formElement.addEventListener('submit', submitForm);//слушатель отправки значений
placeAddButton.addEventListener('click', openPlacesPopup); // Открытие попы плейсес по кнопке
placesPopupCloseButton.addEventListener('click', closePlacesPopup);// Закрытие попы плейсес по кнопке
placeSubmitButton.addEventListener('click', submitPlacesForm);// Отправка инпут значений в хтмл
