import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitAction) {
    super(popupSelector);
    this._submitAction = submitAction;
    this._formElement = document.querySelector(
      `${popupSelector} .popup__container-form`
    );
    this._popupElement = document.querySelector(".popup");
    this._inputList = this._formElement.querySelectorAll(
      ".popup__container-input"
    );
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      const value = this._formElement.querySelector(`#${input.id}`)?.value;
      inputValues[input.id] = value;
    });
    return inputValues;
  }

  _handleAddClass() {
    this._popupElement.classList.add("open");
  }

  setEventListeners() {
    super.setEventListeners();

    this._btnClose = this._popupElement.querySelector(
      ".popup__container-close-popup"
    );

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitAction(this._getInputValues());
    });

    this._btnClose.addEventListener("click", () => {
      this._handleAddClass();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
