import Popup from "./Popup.js";

export  default class PopupWithForm extends Popup {
  constructor( popupSelector,  {callbackFormSubmit} ) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
  }
setEventListeners() {
    this._popupSelector.addEventListener('submit', (e) => {
      e.preventDefault()
      super.setEventListeners()
      this._callbackFormSubmit(this._getInputValue())
  })
}
_getInputValue() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input')
    this._popupFormValues = {}
    this._inputList.forEach(input => {
        this._popupFormValues[input.name] = input.value
    })
    return this._popupFormValues
}
close() {
    super.close()
    this._popupSelector.reset()
}
}
