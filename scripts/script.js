const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.popup__close-icon_type_edit-profile');
const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileFormElement = document.querySelector('.popup__form_type_edit-profile');
const profilePopupSubmitButton = document.querySelector('.popup__button_type_edit-profile');
const profileNameInput = profileFormElement.querySelector('.popup__input_element_name');
const profileJobInput = profileFormElement.querySelector('.popup__input_element_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const elements = document.querySelector('.elements');
const element = document.querySelector('.element');
const elementTemplate = document.querySelector('#template-element').content;
const addCardButton = document.querySelector('.profile__add-card-button');
const cardPopupCloseButton = document.querySelector('.popup__close-icon_type_add-place');
const cardPopup = document.querySelector('.popup_type_add-place');
const cardSubmitButton = document.querySelector('.popup__button_type_add-place');
const cardInputName = document.querySelector('.popup__input_place-name');
const cardInputLink = document.querySelector('.pupup__input_place-link');
const cardPopupForm = document.querySelector('.popup__form_type_add-place');
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupCloseIcon = document.querySelector('.popup__close-icon_type_image');
const placesImage = document.querySelector('.element__image');
const placesDescription = document.querySelector('.element__text');
const popupImagePicture = document.querySelector('.popup__picture-image');
const popupImageTitle = document.querySelector('.popup__title-image');



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


// Фнкция карточек
function renderCard(card) {
  const elementCopy = elementTemplate.querySelector('.element').cloneNode(true);
  elementCopy.querySelector('.element__image').src = card.link; // Добавление значение link из массива в поле src
  elementCopy.querySelector('.element__image').alt = card.name; // Добавление значения name в поле alt
  elementCopy.querySelector('.element__text').textContent = card.name; // Добавление значение из массива в текст элемента
  elementCopy.querySelector('.element__button').addEventListener('click', (event) => {
    event.target.classList.toggle('element__button_active')}); // Добавление кнопки лайка со слушателем, которая меняет классы
  elementCopy.querySelector('.element__trash-button').addEventListener('click', (event) => {
    event.target.closest('.element').remove()}); // Кнопка удаления у карточек
  elementCopy.querySelector('.element__image').addEventListener('click', () => {
    openPopup(imagePopup);
    popupImagePicture.src = elementCopy.querySelector('.element__image').src;
    popupImagePicture.alt = elementCopy.querySelector('.element__text').textContent;                  // Добевление картинки, её альта и название в поп ап
    popupImageTitle.textContent = elementCopy.querySelector('.element__text').textContent;});
  imagePopupCloseIcon.addEventListener('click', () => {closePopup(imagePopup);});
  return elementCopy;
};

function addCard(card) {
  const elementCopy = renderCard(card); // пихаем фкнкцию рендера в константу и вначала блока эелементс
  elements.prepend(elementCopy);
}

// вызываем функцию аддкарт для каждого элемента массива
initialCards.forEach((card) => {
  addCard(card);
});

//Функция добавления карточки по кнопке
const submitNewCard = (event) => {
  event.preventDefault();

  addCard({
      name: cardInputName.value,
      link: cardInputLink.value
  });
  cardPopupForm.reset();
  closePopup(cardPopup);
};

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
function openPopup(jopa) {
  jopa.classList.add('popup_opened');
}

//Функция закрытия попы
function closePopup(jopa){
  jopa.classList.remove('popup_opened');
}

//Функция сохранения и отправки значений в профиль
function submitProfileForm (jopa) {
  jopa.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profilePopup);
}
editButton.addEventListener('click', () => {openPopup(profilePopup);});
closeEditButton.addEventListener('click', () => {closePopup(profilePopup);})
profilePopupSubmitButton.addEventListener('click', submitProfileForm);
addCardButton.addEventListener('click', () => {openPopup(cardPopup);});
cardPopupCloseButton.addEventListener('click', () => {closePopup(cardPopup);});
cardSubmitButton.addEventListener('click', submitNewCard);
