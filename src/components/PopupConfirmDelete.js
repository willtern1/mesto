import Popup from "./Popup.js";

export  default  class  PopupConfirmDelete  extends  Popup{
  constructor(popupElement) {
    super(popupElement);
    this._popupForm = this._popupElement.querySelector('.popup__form');
  }
  setEventListeners() {
    super.setEventListeners()
    this._popupElement.addEventListener('submit', (e) => {
      e.preventDefault()
      this._data()})
  }
  submitDeleteCard(data) {
    this._data = data
  }
}
