export default class ModalConfirmAction {
  constructor() {
    this._action;
    this._modalElement = document.querySelector(".modal-window");
    this._formElement = this._modalElement.querySelector("#say-yes");
    this._btnClose = this._modalElement.querySelector(
      ".modal-window__btn-close"
    );
    this._btnConfirm = this._formElement.querySelector(
      ".modal-window__btn-delete"
    );
    this._overlay = this._modalElement.querySelector(".modal-window__overlay");

    this._setEventListeners();
  }

  _setEventListeners() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });

    this._btnClose.addEventListener("click", () => {
      this.close();
    });

    this._overlay.addEventListener("click", () => {
      this.close();
    });

    this._btnConfirm.addEventListener("click", () => {
      this._handleAction();
    });
  }

  open(callback) {
    this._action = callback;
    this._modalElement.classList.remove("open");
    this._formElement.classList.remove("open");
  }

  close() {
    this._modalElement.classList.add("open");
    this._formElement.classList.add("open");
  }

  _handleAction() {
    this._action();
  }
}
