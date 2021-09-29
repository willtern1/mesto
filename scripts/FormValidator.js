
export class FormValidator {
  constructor(selectorsList, formElement) {
    this._inputSelector = selectorsList.inputSelector;
    this._submitButtonSelector = selectorsList.submitButtonSelector;
    this._inactiveButtonClass = selectorsList.inactiveButtonClass;
    this._inputErrorClass = selectorsList.inputErrorClass;
    this._errorClass = selectorsList.errorClass;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._inputListArray = Array.from(this._formElement.querySelectorAll(this._inputSelector)); //делаем массив из инпутов
  }
  //функция  вызова текста ошибки в инпутах
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass); // добавление инпуту класс ошибки
    errorElement.textContent = inputElement.validationMessage; //текст ошибки
    errorElement.classList.add(this._errorClass); // добавление стилей для текста ошибки
  }

  // функция скрывающая ошибки инпутов
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass); // удаление инпуту класса ошибки
    errorElement.classList.remove(this._errorClass);  // удаление стилей для текста ошибки
    errorElement.textContent = ''; //обнуление текста ошибки
  }

  //функция проверки валидности инпутов
  _checkInputValid(inputElement) {
    if (!inputElement.validity.valid) { //проверяем инпут на валидность
      this._showInputError(inputElement); //если условия не подходят, показывает ошибку
    } else {
      this._hideInputError(inputElement); //если условия подходят, ошибку скрывает
    }
  }

  // функция отключения кнопки
  _disableButtonSubmit(buttonElement) {
    buttonElement.classList.add(this._inactiveButtonClass); //добавление класса
    buttonElement.setAttribute('disabled', true); // отключение сабмита кнопки
  }

  // функция включения кнопки
  _enableButtonSubmit(buttonElement) {
    buttonElement.classList.remove(this._inactiveButtonClass);//  удаление класса
    buttonElement.removeAttribute('disabled'); // удалние атрибута кнопки,включение сабмита
  }

  // функция проверки валидности каждого инпута
  _hasInvalidInput() {
    return this._inputListArray.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //функция проверки количества символов в инпутах
  _hasEmptyValue() {
    return this._inputListArray.some((inputElement) => {
      return inputElement.value.length === 0;
    });
  }

  // функция включения и отключения кнопки, от валидности ипутов
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList) || this._hasEmptyValue(this._inputList)) { //если условия инпутов не соблюдены и их содержание 0
      this._disableButtonSubmit(this._buttonElement); //вырубаем кнопку
    } else { //если условия валидны,кнопка активная
      this._enableButtonSubmit(this._buttonElement);
    }
  }
//Ресет формы
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

  }

  // лиснер форм попапов на валидность инпутов. с включением и  отключениме кнопки и отображения текста ошибки
  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault(); // офаем дефолстный метод
    });
    this._toggleButtonState(this._inputList);

    this._inputList.forEach((inputElement) => {  //отключаем ошибку для каждого инпута
      this._hideInputError(inputElement);

      inputElement.addEventListener('input', () => {
        this._checkInputValid(inputElement);  //проверка ипутов на валидность при вводе
        this._toggleButtonState(this._inputList);
      });
    });
  }

  //открытый метод класса
  enableValidation() {
    this._setEventListeners();
  }
}
