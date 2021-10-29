export const editButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.popup_type_edit-profile');
export const profileFormElement = document.querySelector('.popup__form_type_edit-profile');
export const profileNameInput = profileFormElement.querySelector('.popup__input_element_name');
export const profileJobInput = profileFormElement.querySelector('.popup__input_element_job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileAvatar = document.querySelector('.profile__image');
export const cardsSection = document.querySelector('.elements');
export const popupCardTitleInput = document.querySelector('.popup__input_element_title');
export const popupCardLinkInput = document.querySelector('.popup__input_element_link');
export const cardForm = document.querySelector('.popup__form_type_add-place');
export const addCardButton = document.querySelector('.profile__add-card-button');
export const cardPopup = document.querySelector('.popup_type_add-place');
export const imagePopup = document.querySelector('.popup_type_image');
export const popupImagePicture = document.querySelector('.popup__picture-image');
export const popupImageTitle = document.querySelector('.popup__title-image');
export const  popupDeleteCard = document.querySelector('.popup_type_delete-card');
export const  avatarProfileContainer = document.querySelector('.profile__avatar-container');
export const avatarPopup = document.querySelector('.popup_type_add-avatar');
export const  avatarForm = document.querySelector('.popup__form_type_add-avatar')
export const avatarInput = document.querySelector('.popup__input_avatar_link');
export const buttonAvatarSubmit = document.querySelector('.popup__button_type_add-avatar')
export const buttonCardSunmit = document.querySelector('.popup__button_type_add-place');
export const buttonProfileSubmit = document.querySelector('.popup__button_type_edit-profile');
export  const id = [];
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
    link: 'https://i.ibb.co/6bL8yPt/enemy.jpg'
  },
  {
    name: 'Пленницы',
    link: 'https://i.ibb.co/kX00bY1/Prisoners.jpg'
  },
  {
    name: 'Убийца',
    link: 'https://i.ibb.co/zS5CnbG/Sicario.jpg'
  },
  {
    name: 'Прибытие',
    link: 'https://i.ibb.co/CJzSnW8/Arrival.png'
  },
  {
    name: 'Бегущий по лезвию 2049',
    link: 'https://i.ibb.co/k0P4gF4/Bladerunner-blade-runner-2049.png'
  },
  {
    name: 'Дюна',
    link: 'https://i.ibb.co/bJsdfd9/Dune.jpg'
  },
];
