export  default  class  Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
  }
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown',  this._handleEscClose)
  }
  close(){
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown',  this._handleEscClose);
  }
  _handleEscClose = (e) =>{
    if ( e.key === 'Escape'){
      this.close();
    }
  }
  setEventListeners() {
  this._popupElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
      this.close();
  }
  })
  }
}
