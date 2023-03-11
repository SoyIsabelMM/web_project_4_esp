const settingElement = {
  formList: ".popup__container-form",
  inputSelector: ".popup__container-input",
  submitButtonSelector: ".popup__container-save-btn",
  inactiveButtonClass: "popup__container-save-btn_inactive",
  inputErrorClass: "popup__container-input_type_error",
  errorClass: "popup__input-error_active",
};

class FormValidator {
  constructor(setting, findOut) {
    this._setting = setting;
    this._findOut = findOut;
    this._formList = setting.formList;
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
  }

  _showInputError() {
    this.errorIdSelector = this._formList.querySelector(
      `.${this._inputSelector.id}-error`
    );
    this._inputSelector.classList.add(`${this._inputErrorClass}`);

    this.errorIdSelector.textContent = this.errorIdSelector;
    this.errorIdSelector.classList.add(`${this._errorClass}`);
  }

  _hideInputError() {
    this.errorIdSelector = formList.querySelector(
      `.${this._inputSelector.id}-error`
    );
    this._inputSelector.classList.remove(`${this._inputErrorClass}`);

    this.errorIdSelector.classList.remove(`${this._errorClass}`);
    this.errorIdSelector.textContent = "";
  }

  isValid() {
    return !this._formLis.validity.valid
      ? this._showInputError.this._inputSelector.validationMessage()
      : this._hideInputError();
  }

  _hasInvalidInput() {
    this._inputSelector.some(() => !this._inputErrorClass.validity.valid);
  }

  _disabledButton() {
    this._submitButtonSelector.classList.add(`${this._inactiveButtonClass}`);
    this._submitButtonSelector.setAttribute("disabled", true);
  }

  _enabledButton() {
    this._submitButtonSelector.classList.remove(`${this._inactiveButtonClass}`);
    this._submitButtonSelector.removeAttribute("disabled", true);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disabledButton();
    } else {
      this._enabledButton();
    }
  }

  eventListeners() {
    this.inputList = Array.from(this.inputSelector);

    this._toggleButtonState();
  }
}
