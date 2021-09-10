// функция  вызова текста ошибки в инпутах
const showInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass); // добавление инпуту класс ошибки
  errorElement.textContent = inputElement.validationMessage; //текст ошибки
  errorElement.classList.add(errorClass); // добавление стилей для текста ошибки
}
// функция скрывающая ошибки инпутов
const hideInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass); // удаление инпуту класса ошибки
  errorElement.textContent = ''; //обнуление текста ошибки
  errorElement.classList.remove(errorClass);// удаление стилей для текста ошибки
}
//функция проверки валидности инпутов
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);  //находим поля ошибок в html, пихаем в константу
  if (!inputElement.validity.valid) { //проверяем инпут на валидность
    showInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass); //если условия не подходят, показывает ошибку
  } else {
    hideInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);//если условия подходят, ошибку скрывает
  }
};
// функция проверки валидности каждого инпута
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};
//функция проверки количества символов в инпутах
const hasNotInputValue = (inputList) => {
  return inputList.some(inputElement => {
    return inputElement.value.length <= 0;
  });
};
//функция выключения кнопки
const disableSubmtButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute("disabled", "true");
};
// функция включения кнопки
const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute("disabled", "true");
};
// функция включения и отключения кнопки, от валидности ипутов
const toggleButtonState = (formElement, inputList, submitButtonSelector, inactiveButtonClass) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);

  if (hasInvalidInput(inputList) || hasNotInputValue(inputList)) {
    disableSubmtButton(buttonElement, inactiveButtonClass);
  }else {
    enableSubmitButton(buttonElement, inactiveButtonClass);
  }
};
// лиснер форм попапов на валидность инпутов. с включением и  отключениме кнопки и отображения текста ошибки
const eventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
    });
  });
  if (hasNotInputValue(inputList)) {
    toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
  };
};
// функция объекта enableValidation
const enableValidation = (settings) => {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(formElement => {
    eventListeners(formElement, settings.inputSelector, settings.submitButtonSelector, settings.inputErrorClass, settings.errorClass, settings.inactiveButtonClass);
  });
};
//вызов функции с парамметрами
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
