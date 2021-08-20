let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_element_name');
let jobInput = formElement.querySelector('.popup__input_element_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

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

//popup.addEventListener('click', closePopup);// слушатель закрытия попы по фону
editButton.addEventListener('click', openPopup); //слушатель открытия попы по клику на кнопку
closeButton.addEventListener('click', closePopup);//слушатель закрытия попы по клику на копку
formElement.addEventListener('submit', submitForm);//слушатель отправки значений
