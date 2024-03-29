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

export const inputName = document.querySelector("#name");
export const inputAboutMe = document.querySelector("#about-me");

/**Constantes para utilizarlas en el funcionamiento de añadir nuevas imagenes */
export const btnOpenFormAddImage = document.querySelector(".profile__add-btn");
export const addPictureFormClose = document.querySelector(
  "#add-picture-form .popup__container-close-popup"
);

export const settingElement = {
  inputSelector: ".popup__container-input",
  submitButtonSelector: ".popup__container-save-btn",
  inactiveButtonClass: "popup__container-save-btn_inactive",
  inputErrorClass: "popup__container-input_type_error",
  errorClass: "popup__input-error_active",
};

export const selector = ".elements";

export const formChangeImage = document.querySelector(
  ".modal-window__form-change-image"
);

export const btnKeep = document.querySelector(".modal-window__keep-btn");

export const inputChangeUrlImage = formChangeImage.querySelector("#url-change");

export const apiKey = "e1a4b600-66f9-4d45-b660-4ae737476424";
