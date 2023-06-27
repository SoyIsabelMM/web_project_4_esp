import Popup from "./Popup.js";

export default class PopupWhitImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._modalImage = document.querySelector(".modal");
    this._containerImage = this._modalImage.querySelector(".modal__image-card");
    this._containerTitle = this._modalImage.querySelector(".modal__title-text");
  }

  open(src, name) {
    this._containerImage.src = src;
    this._containerImage.alt = name;

    this._containerTitle.textContent = name;

    this._selector.classList.remove("open");
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
