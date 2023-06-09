export default class Popup {
  constructor(popupSelector) {
    this._selector = document.querySelector(popupSelector);
    this._btnPopupClose = document.querySelector(
      ".popup__container-close-popup"
    );
    this._btnModalClose = document.querySelector(".modal-window__btn-close");
    this._btnModalCloseChange = document.querySelector(".modal-window__close-change");
  }

  open() {
    this._selector.classList.remove("open");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  close() {
    this._selector.classList.add("open");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._btnPopupClose.addEventListener("click", this.close.bind(this));
    this._btnModalClose.addEventListener("click", this.close.bind(this));
    this._btnModalCloseChange.addEventListener("click", this.close.bind(this));

    this._selector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__overlay")) {
        this.close();
      }
      if (evt.target.classList.contains("modal-window__overlay")) {
        this.close();
      }
    });
  }
}
