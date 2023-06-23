export default class ModalAvatarForm {
  constructor() {
    this._modalElement = document.querySelector(".modal-window");
    this._formElement = this._modalElement.querySelector("#change-profile");
    this._overlay = this._modalElement.querySelector(".modal-window__overlay");
    this._closeElement = this._formElement.querySelector(
      ".modal-window__close-change"
    );
    this._inputElement = this._formElement.querySelector(
      ".modal-window__form-change-image"
    );

    this._btnKeep = this._formElement.querySelector(".modal-window__keep-btn");
    this._btnEditPhoto = document.querySelector(".profile__btn-edit-photo");

    this._setEventListener();
  }

  _setEventListener() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    });

    this._btnEditPhoto.addEventListener("click", () => {
      this.open();
    });

    this._closeElement.addEventListener("click", () => {
      this.close();
    });
  }

  open() {
    this._modalElement.classList.remove("open");
    this._formElement.classList.remove("open");
  }

  close() {
    this._modalElement.classList.add("open");
    this._formElement.classList.add("open");
  }

  loadingAction(isLoading) {
    if (isLoading) {
      this._btnKeep.textContent = "Guardando...";
    } else {
      this._btnKeep.textContent = "Guardar";
    }
  }
}
