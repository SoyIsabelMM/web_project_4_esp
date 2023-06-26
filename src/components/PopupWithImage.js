import Popup from "./Popup.js";

export default class PopupWhitImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(src, name) {
    this.containerImage = document.querySelector(".modal__image-card").src =
      src;

    this.ContainerTitle = document.querySelector(
      ".modal__title-text"
    ).textContent = name;

    this._selector.classList.remove("open");
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
