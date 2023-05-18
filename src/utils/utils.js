import Card from "./Card.js";
import {
  elementsSectionCard,
  modalExpandedImage,
  modalExpandedImageCloseBtn,
  btnEditInfoProfile,
  inputName,
  inputAboutMe,
  btnOpenFormAddImage,
  addPictureFormClose,
} from "./constants.js";
import Popup from "./Popup.js";
import PopupWithForm from "./popupWithForm.js";
import UserInfo from "./UserInfo.js";

export const basePath = process.env.NODE_ENV == 'development' ? "" : "/web_project_4_esp/";

const popupFormProfile = new PopupWithForm("#edit-profile-form", editProfile);
const closePopupEditProfile = new Popup("#edit-profile-form");

popupFormProfile.setEventListeners();

const userInfo = new UserInfo({
  nameUserSelector: ".profile__info-name",
  jobUserSelector: ".profile__info-about",
});

/**
 *Abre y trae los datos del contenedor de perfil.
 */
function openPopupProfile() {
  popupFormProfile.open();

  const currentUserInfo = userInfo.getUserInfo();

  inputName.value = currentUserInfo.name;
  inputAboutMe.value = currentUserInfo.job;
}

/**
 * Cambio de datos al editar perfil y queden almacenado
 *los valores nuevos
 */
function editProfile() {
  closePopupEditProfile.close();

  userInfo.setUserInfo({
    name: inputName.value,
    job: inputAboutMe.value,
  });
}

/**Cierre del modal de expandedImage, se aplica al boton X */
function closeModalExpandedImage() {
  modalExpandedImage.classList.add("open");
}

function closeModal(evt) {
  if (evt.key === "Escape") {
    modalExpandedImage.classList.add("open");
  }
}

/**Logíca para el formulario, agregar nuevas imágenes, abrir, cerrar y formatear */

const popupFormAddPicture = new PopupWithForm(
  "#add-picture-form",
  saveNewImage
);

popupFormAddPicture.setEventListeners();

function openPopupAddImage() {
  popupFormAddPicture.open();
}

function closePopupAddImage() {
  popupFormAddPicture.close();
}

function saveNewImage() {
  addNewCardElement();
  popupFormAddPicture.close();
}

function addNewCardElement() {
  const inputTitlePlace = document.querySelector("#title-place");
  const inputNewImage = document.querySelector("#new-image");

  const data = { name: inputTitlePlace.value, src: inputNewImage.value };
  const cardElement = new Card(data).generateCard();

  elementsSectionCard.prepend(cardElement);
  openPopupAddImage();
}

export function addEventListeners() {
  modalExpandedImageCloseBtn.addEventListener("click", closeModalExpandedImage);
  modalExpandedImage.addEventListener("click", closeModalExpandedImage);
  btnEditInfoProfile.addEventListener("click", openPopupProfile);
  btnOpenFormAddImage.addEventListener("click", openPopupAddImage);
  addPictureFormClose.addEventListener("click", closePopupAddImage);

  document.addEventListener("keydown", closeModal);
}