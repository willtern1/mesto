import Popup from "./Popup.js";

export  default  class  PopupConfirm  extends  Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector('.popup__form');
  }
  setEventListeners() {
    this._popupSelector.addEventListener('submit', (e) => {
      e.preventDefault()
      super.setEventListeners();
      this._data()})
  }
  submitDeleteCard(data) {
    this._data = data
  }
}
