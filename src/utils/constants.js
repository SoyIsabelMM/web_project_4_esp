// Import your images
import valleYosemite from '../images/valle-yosemite.jpeg';
import lagoLouise from '../images/Lago-Louise.jpeg';
import montanasCalvas from '../images/montanas-calvas.jpeg';
import latemar from '../images/latemar.jpeg';
import parqueVanoise from '../images/parque-vanoise.jpeg';
import lagoDibraies from '../images/lago-dibraies.jpeg';

/**
 * Constante que almacena todas las imágenes que aparecen al inicio de nuestro proyecto
 */
export const initialCards = [
  {
    name: "Valle de Yosemite",
    src: valleYosemite,
  },
  {
    name: "Lago Louise",
    src: lagoLouise,
  },
  {
    name: "Montañas Calvas",
    src: montanasCalvas,
  },
  {
    name: "Latemar",
    src: latemar,
  },
  {
    name: "Parque Nacional de la Vanoise",
    src: parqueVanoise,
  },
  {
    name: "Lago di Braies",
    src: lagoDibraies,
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