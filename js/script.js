let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_element_name');
let jobInput = formElement.querySelector('.popup__input_element_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let likebutton = document.querySelectorAll('.element__button')[0];
let likebutton2 = document.querySelectorAll('.element__button')[1];
let likebutton3 = document.querySelectorAll('.element__button')[2];
let likebutton4 = document.querySelectorAll('.element__button')[3];
let likebutton5 = document.querySelectorAll('.element__button')[4];
let likebutton6 = document.querySelectorAll('.element__button')[5];

function toggleLike() {
  likebutton.classList.toggle('element__button-image_active');
}

function toggleLike2() {
  likebutton2.classList.toggle('element__button-image_active');
}

function toggleLike3() {
  likebutton3.classList.toggle('element__button-image_active');
}

function toggleLike4() {
  likebutton4.classList.toggle('element__button-image_active');
}

function toggleLike5() {
  likebutton5.classList.toggle('element__button-image_active');
}

function toggleLike6() {
  likebutton6.classList.toggle('element__button-image_active');
}

document.addEventListener ('keydown', function(event) {
  if(event.key === 'Escape') {
    popup.classList.remove('popup_opened');
    }
  })

  document.querySelector('.popup__container').addEventListener(
    'click', function (event) {
      event.stopPropagation();
    }
  )

function popupOpen(){
  popup.classList.add('popup_opened');
  nameInput.textContent = profileName.textContent;
  jobInput.textContent = profileJob.textContent;
}
function popupClose(){
  popup.classList.remove('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function formSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

popup.addEventListener('click', popupClose);
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmit);
likebutton.addEventListener('click', toggleLike);
likebutton2.addEventListener('click', toggleLike2);
likebutton3.addEventListener('click', toggleLike3);
likebutton4.addEventListener('click', toggleLike4);
likebutton5.addEventListener('click', toggleLike5);
likebutton6.addEventListener('click', toggleLike6);

