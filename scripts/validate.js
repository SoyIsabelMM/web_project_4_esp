/* eslint-disable max-len */
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__container-input_type_error");

  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove("popup__container-input_type_error");

  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => (!inputElement.validity.valid
  ? showInputError(formElement, inputElement, inputElement.validationMessage)
  : hideInputError(formElement, inputElement));

const hasInvalidInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid);

const disabledButton = (buttonElement) => {
  buttonElement.classList.add("popup__container-save-btn_inactive");
  buttonElement.setAttribute("disabled", true);
};

const enableButton = (buttonElement) => {
  buttonElement.classList.remove("popup__container-save-btn_inactive");
  buttonElement.removeAttribute("disabled", false);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disabledButton(buttonElement);
  } else {
    enableButton(buttonElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".popup__container-input"),
  );
  const buttonElement = formElement.querySelector(".popup__container-save-btn");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// eslint-disable-next-line import/prefer-default-export
const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(".popup__container-form"),
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();
