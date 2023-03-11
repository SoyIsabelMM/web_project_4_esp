const settingElement = {
  formSelector: ".popup__container-form",
  inputSelector: ".popup__container-input",
  submitButtonSelector: ".popup__container-save-btn",
  inactiveButtonClass: "popup__container-save-btn_inactive",
  inputErrorClass: "popup__container-input_type_error",
  errorClass: "popup__input-error_active",
};

class FormValidator {
  constructor(setting, enableValidation) {
    this._setting = setting;
    this._enableValidation = enableValidation;
    this._formSelector = setting.formSelector;
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
  }

  _showInputError() {}
}

