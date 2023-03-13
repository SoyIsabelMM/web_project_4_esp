import Card from "./Card.js";
import {
  elementsSectionCard,
  modalExpandedImage,
  modalExpandedImageCloseBtn,
  btnEditInfoProfile,
  closeBtnPopup,
  popupFormeOpened,
  inputName,
  inputAboutMe,
  profileName,
  profileAboutMe,
  btnSaveProfileInfo,
  btnOpenFormAddImage,
  addPictureForm,
  addPictureFormClose,
  popupEditProfileOverlay,
  popupNewImageOverlay,
  createNewImageBtn,
} from "./script.js";


/**Cierre del modal de expandedImage, se aplica al boton X */
function closeModalExpandedImage() {
  modalExpandedImage.classList.toggle("modal_opened");
}

/**
 *Abre y trae los datos del contenedor de perfil.
 */
function togglePopupProfile() {
  popupFormeOpened.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAboutMe.value = profileAboutMe.textContent;
}

/**
 * Cambio de datos al editar perfil y queden almacenado
 *los valores nuevos
 */
function editProfile() {
  profileName.textContent = inputName.value;
  profileAboutMe.textContent = inputAboutMe.value;
}

/**
 * Evitamos que la página se recargue al presionar el botón de guardar
 * @param {event} evt
 */
function saveInfoProfile(evt) {
  evt.preventDefault();
  editProfile();
}

function togglePopupAddImage() {
  addPictureForm.classList.toggle("popup_opened");
}

function saveNewImage(evt) {
  evt.preventDefault();
  addNewCardElement();
}

function addNewCardElement() {
  const inputTitlePlace = document.querySelector("#title-place");
  const inputNewImage = document.querySelector("#new-image");

  const data = { name: inputTitlePlace.value, src: inputNewImage.value };
  const cardElement = new Card(data).generateCard();

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

export default function addEventListeners() {
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

  document.addEventListener("keydown", closeAllPopup);
  document.addEventListener("keydown", closeModal);
}

addEventListeners();
