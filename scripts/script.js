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

