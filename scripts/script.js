import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

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
 * Traemos nuestra sección element, aquí estarán almacenadas nuestras cards
 */
export const elementsSectionCard = document.querySelector(".elements");

/**Traemos el elemento HTML modal y su botón para cerrar */
export const modalExpandedImage = document.querySelector(".modal");
export const modalExpandedImageCloseBtn = modalExpandedImage.querySelector(
  ".modal__container-close"
);

/** Constantes para utilizarlas en el funcionamiento de editar el perfil */
export const btnEditInfoProfile = document.querySelector(
  ".profile__info-edit-btn"
);
export const closeBtnPopup = document.querySelector(
  ".popup__container-close-popup"
);

const popupEditProfile = document.querySelector("#edit-profile-form");

export const popupFormeOpened = document.querySelector(".popup_opened");
export const inputName = document.querySelector("#name");
export const inputAboutMe = document.querySelector("#about-me");
export const profileName = document.querySelector(".profile__info-name");
export const profileAboutMe = document.querySelector(".profile__info-about");
export const btnSaveProfileInfo = document.querySelector(
  ".popup__container-save-btn"
);

/**Constantes para utilizarlas en el funcionamiento de añadir nuevas imagenes */
export const btnOpenFormAddImage = document.querySelector(".profile__add-btn");
export const addPictureForm = document.querySelector("#add-picture-form");
export const addPictureFormClose = document.querySelector(
  "#add-picture-form .popup__container-close-popup"
);

const popupNewImage = document.querySelector("#add-picture-form");
export const popupEditProfileOverlay =
  popupEditProfile.querySelector(".popup__overlay");
export const popupNewImageOverlay =
  popupNewImage.querySelector(".popup__overlay");

export const createNewImageBtn = document.querySelector(
  "#add-picture-form .popup__container-save-btn"
);

function renderInitialCards() {
  for (const data of initialCards) {
    const elementsSectionCard = document.querySelector(".elements");

    const cardElement = new Card(data).generateCard();
    elementsSectionCard.append(cardElement);
  }
}

renderInitialCards();


const settingElement = {
  inputSelector: ".popup__container-input",
  submitButtonSelector: ".popup__container-save-btn",
  inactiveButtonClass: "popup__container-save-btn_inactive",
  inputErrorClass: "popup__container-input_type_error",
  errorClass: "popup__input-error_active",
};

(function init() {
  const formList = Array.from(
    document.querySelectorAll(".popup__container-form")
  );

  formList.forEach((formElement) => {
    const formValidator = new FormValidator(settingElement, formElement);
    formValidator.enableValidation();
  });
})();