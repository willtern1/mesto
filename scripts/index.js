const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileFormElement = document.querySelector('.popup__form_type_edit-profile');
const profileNameInput = profileFormElement.querySelector('.popup__input_element_name');
const profileJobInput = profileFormElement.querySelector('.popup__input_element_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
document.querySelector('#template-element').content;
const addCardButton = document.querySelector('.profile__add-card-button');
const cardPopup = document.querySelector('.popup_type_add-place');
document.querySelector('.popup_type_image');
document.querySelector('.popup__picture-image');
document.querySelector('.popup__title-image');
// Закрытие поп по Escape
function closePopupEsc(evt){
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//Закрытие попы по оверлею и кретику
function closePopupOver(evt){
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//Функция открытия попы
function openPopup(event) {
  event.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOver)
}

//Функция закрытия попы
function closePopup(event){
  event.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupOver);
}

//Функция сохранения и отправки значений в профиль
function submitProfileForm (event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profilePopup);
}
//Лиснеры на кнопки
editButton.addEventListener('click', () => {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  openPopup(profilePopup)});
profileFormElement.addEventListener('submit', submitProfileForm);
addCardButton.addEventListener('click', () => openPopup(cardPopup));


