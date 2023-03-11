import Card from "./card.js";

/**Traemos el elemento HTML modal y su botón para cerrar */
const modalExpandedImage = document.querySelector(".modal");
const modalExpandedImageCloseBtn = modalExpandedImage.querySelector(
  ".modal__container-close"
);

/**Cierre del modal de expandedImage, se aplica al boton X */
function closeModalExpandedImage() {
  modalExpandedImage.classList.toggle("modal_opened");
}

const btnEditInfoProfile = document.querySelector(".profile__info-edit-btn");
const closeBtnPopup = document.querySelector(".popup__container-close-popup");
const popupEditProfile = document.querySelector("#edit-profile-form");

const popupFormeOpened = document.querySelector(".popup_opened");
const inputName = document.querySelector("#name");
const inputAboutMe = document.querySelector("#about-me");
const profileName = document.querySelector(".profile__info-name");
const profileAboutMe = document.querySelector(".profile__info-about");
const btnSaveProfileInfo = document.querySelector(".popup__container-save-btn");

/**
 *Abre y trae los datos del contenedor de perfil.
 */
function togglePopupProfile() {
  popupFormeOpened.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAboutMe.value = profileAboutMe.textContent;
}

/**
 * Cambio de datos de editar perfil y queden almacenado
 *los valores nuevos
 */
function editProfile() {
  profileName.textContent = inputName.value;
  profileAboutMe.textContent = inputAboutMe.value;
}

/**
 * Evitamos que la página se recargue al presionar el botón de guardar
 * @param {evento} evt
 */
function saveInfoProfile(evt) {
  evt.preventDefault();
  editProfile();
}

const btnOpenFormAddImage = document.querySelector(".profile__add-btn");
const addPictureForm = document.querySelector("#add-picture-form");
const addPictureFormClose = document.querySelector(
  "#add-picture-form .popup__container-close-popup"
);

/** Constantes para traer los elementos
 * para el popup de editar perfil */
const popupNewImage = document.querySelector("#add-picture-form");
const popupEditProfileOverlay =
  popupEditProfile.querySelector(".popup__overlay");
const popupNewImageOverlay = popupNewImage.querySelector(".popup__overlay");
/**
 *traemos los elementos para el botón
 *  de guardado que se usa en el FORM de add-picture-form
 */
 const createNewImageBtn = document.querySelector(
  "#add-picture-form .popup__container-save-btn"
);

function togglePopupAddImage() {
  addPictureForm.classList.toggle("popup_opened");
}

function saveNewImage(evt) {
  evt.preventDefault();
  addNewCardElement()
}

function addNewCardElement() {
  const inputTitlePlace = document.querySelector("#title-place");
  const inputNewImage = document.querySelector("#new-image");

  const cardElement = getCardElement(
    inputNewImage.value,
    inputTitlePlace.value
  );

  elementsSectionCard.prepend(cardElement);
  togglePopupAddImage();
  resetForm();
}

function resetForm() {
  const inputTitlePlace = document.querySelector("#title-place");
  const inputNewImage = document.querySelector("#new-image");
  inputTitlePlace.value = "";
  inputNewImage.value = "";
}

modalExpandedImage.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("modal")) {
    closeModalExpandedImage();
  }
});

function closeAllPopup(evt) {
  if (evt.key === "Escape") {
    const myPopups = document.querySelectorAll(".popup");
    myPopups.forEach((popup) => {
      popup.classList.add("popup_opened");
    });
  }
}

function closeModal(evt) {
  if (evt.key === "Escape") {
    modalExpandedImage.classList.add("modal_opened");
  }
}

function addEventListeners() {
  modalExpandedImageCloseBtn.addEventListener("click", closeModalExpandedImage);
  btnEditInfoProfile.addEventListener("click", togglePopupProfile);
  closeBtnPopup.addEventListener("click", togglePopupProfile);
  popupEditProfileOverlay.addEventListener("click", togglePopupProfile);
  btnSaveProfileInfo.addEventListener("click", saveInfoProfile);
  btnSaveProfileInfo.addEventListener("click", togglePopupProfile);
  btnOpenFormAddImage.addEventListener("click", togglePopupAddImage);
  addPictureFormClose.addEventListener("click", togglePopupAddImage);
  popupNewImageOverlay.addEventListener("click", togglePopupAddImage);
  createNewImageBtn.addEventListener("click", saveNewImage);
  createNewImageBtn.addEventListener("click", addNewCardElement);

  document.addEventListener("keydown", closeAllPopup);
  document.addEventListener("keydown", closeModal);
}

addEventListeners();
