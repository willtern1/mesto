import Popup from "./Popup.js";

export  default  class  PopupConfirmDelete  extends  Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector('.popup__form');
  }
  setEventListeners() {
    super.setEventListeners()
    this._popupSelector.addEventListener('submit', (e) => {
      e.preventDefault()
      this._data()})
  }
  submitDeleteCard(data) {
    this._data = data
  }
}
