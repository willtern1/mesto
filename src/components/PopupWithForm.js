import Popup from "./Popup.js";

export  default class PopupWithForm extends Popup {
  constructor( popupElement,  { callbackFormSubmit } ) {
    super(popupElement);
    this._callbackFormSubmit = callbackFormSubmit;
    this._popupForm = this._popupElement.querySelector('.popup__form');
  }

setEventListeners() {
  super.setEventListeners()
  // super.close()
    this._popupElement.addEventListener('submit', (e) => {
      e.preventDefault()
      this._callbackFormSubmit(this._getInputValue())
      // this.close()
  })
}
_getInputValue() {
    this._inputList = this._popupElement.querySelectorAll('.popup__input')
    this._popupFormValues = {}
    this._inputList.forEach(input => {
        this._popupFormValues[input.name] = input.value
    })
    return this._popupFormValues
}
close() {
    super.close()
    this._popupForm.reset()
}
}
