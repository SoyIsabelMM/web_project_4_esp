/**
 * Constante que almacena todas las imágenes que aparecenal inicio de nuestro proyecto
 */
const initialCards = [
  {
    name: "Valle de Yosemite",
    src: "./images/valle-yosemite.jpeg",
  },
  {
    name: "Lago Louise",
    src: "./images/Lago-Louise.jpeg",
  },
  {
    name: "Montañas Calvas",
    src: "./images/montanas-calvas.jpeg",
  },
  {
    name: "Latemar",
    src: "./images/latemar.jpeg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    src: "./images/parque-vanoise.jpeg",
  },
  {
    name: "Lago di Braies",
    src: "./images/lago-dibraies.jpeg",
  },
];

/**
 * Constantes para traer los elementos del modal de imágenes
 */
const modalExpandedImage = document.querySelector(".modal");
const modalExpandedImageCloseBtn = modalExpandedImage.querySelector(
  ".modal__container-close"
);

/**Constantes para traer los elementos
 * para el popup de editar perfil */
const btnEditInfoProfile = document.querySelector(".profile__info-edit-btn");
const closeBtnPopup = document.querySelector(".popup__container-close-popup");
const popupFormeOpened = document.querySelector(".popup_opened");

const inputName = document.querySelector("#name");
const inputAboutMe = document.querySelector("#about-me");
const profileName = document.querySelector(".profile__info-name");
const profileAboutMe = document.querySelector(".profile__info-about");
const btnSaveProfileInfo = document.querySelector(".popup__container-save-btn");

/**
 * Constantes que traen los elementos para el popup
 * para agregar nuevas imágenes al card-container
 */
const btnOpenFormAddImage = document.querySelector(".profile__add-btn");
const addPictureForm = document.querySelector("#add-picture-form");
const addPictureFormClose = document.querySelector(
  "#add-picture-form .popup__container-close-popup"
);

/**
 * Con estas constantes estamos clonando el template para nuestras nuevas
 * card y luego almacenarlas en el bloque elements
 */
const elementsSectionCard = document.querySelector(".elements");
const cardTemplete = document.querySelector("#card-template").content;

/**
 * Con esta constante traemos los elementos para el botón
 *  de guardado que se usa en el FORM de add-picture-form
 */
const createNewImageBtn = document.querySelector(
  "#add-picture-form .popup__container-save-btn"
);

//-----------------------------------------------

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
