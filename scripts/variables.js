export const editButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.popup_type_edit-profile');
export const profileFormElement = document.querySelector('.popup__form_type_edit-profile');
export const profileNameInput = profileFormElement.querySelector('.popup__input_element_name');
export const profileJobInput = profileFormElement.querySelector('.popup__input_element_job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const popupCardTitleInput = document.querySelector('.popup__input_element_title');
export const popupCardLinkInput = document.querySelector('.popup__input_element_link');
export const cardForm = document.querySelector('.popup__form_type_add-place');
export const addCardButton = document.querySelector('.profile__add-card-button');
export const cardPopup = document.querySelector('.popup_type_add-place');
export const imagePopup = document.querySelector('.popup_type_image');
export const popupImagePicture = document.querySelector('.popup__picture-image');
export const popupImageTitle = document.querySelector('.popup__title-image');
export const validitySelectorList =({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
export const initialCards = [
  {
    name: 'Враг',
    link: 'https://i.yapx.ru/OUGUQ.jpg'
  },
  {
    name: 'Пленницы',
    link: 'https://i.yapx.ru/OUGUT.jpg'
  },
  {
    name: 'Убийца',
    link: 'https://i.yapx.ru/OUGUW.jpg'
  },
  {
    name: 'Прибытие',
    link: 'https://i.yapx.ru/OUGUd.png'
  },
  {
    name: 'Бегущий по лезвию 2049',
    link: 'https://i.yapx.ru/OUGRZ.png'
  },
  {
    name: 'Дюна',
    link: 'https://i.yapx.ru/OUGUZ.jpg'
  },
];
