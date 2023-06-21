export default class FormValidator {
  constructor(setting, formElement) {
    // Selectors
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
    this._formElement = formElement;

    // Elements
    this._buttonElement = this._formElement.querySelector("button");
  }

  enableValidation() {
    const inputList = Array.from(this._formElement.querySelectorAll("input"));

    this._toggleButtonState(inputList, this._buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(this._formElement, inputElement);
        this._toggleButtonState(inputList, this._buttonElement);
      });
    });
  }

  /** Lógica del formulario*/
  _isValid(formElement, inputElement) {
    inputElement.validity.valid
      ? this._hideInputError(formElement, inputElement)
      : this._showInputError(
          formElement,
          inputElement,
          inputElement.validationMessage
        );
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);

    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  /** Lógica del botón */
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._disabledButton(buttonElement);
    } else {
      this._enableButton(buttonElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _disabledButton(buttonElement) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  }

  _enableButton(buttonElement) {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute("disabled", false);
  }
}
