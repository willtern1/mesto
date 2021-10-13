import Popup from "./Popup.js";
import { popupImagePicture, popupImageTitle} from '../utils/variables.js';

export  default class  PopupWithImage extends  Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._link = popupImagePicture;
     this._title = popupImageTitle;
  }
  open(link, name) {
   this._link.src = link;
   this._link.alt = name;
   this._title.textContent = name;
    super.open();

  }
}
