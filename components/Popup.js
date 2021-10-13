export  default  class  Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open() {
    document.addEventListener('keydown',  this._handleEscClose)
    this._popupSelector.classList.add('popup_opened');
  }
  close(){
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown',  this._handleEscClose);
  }
  _handleEscClose = (e) =>{
    if ( e.key === 'Escape'){
      this.close();
    }
  }
  setEventListeners() {
  this._popupSelector.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
      this.close();
  }
  })
  }
}
