
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
  
  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("popup__container-save-btn_inactive");
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove("popup__container-save-btn_inactive");
      buttonElement.removeAttribute("disabled", false);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(
      formElement.querySelectorAll(".popup__container-input")
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
  
  const enableValidation = () => {
    const formList = Array.from(
      document.querySelectorAll(".popup__container-form")
    );
  
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  
  enableValidation();