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
import Api from "./Api.js";
import ModalConfirmAction from "./ModalConfirmAction.js";

export const api = new Api();
export const modalConfirmAction = new ModalConfirmAction();

const popupFormProfile = new PopupWithForm("#edit-profile-form", editProfile);
const closePopupEditProfile = new Popup("#edit-profile-form");

popupFormProfile.setEventListeners();

const userInfo = new UserInfo({
  nameUserSelector: ".profile__info-name",
  jobUserSelector: ".profile__info-about",
  avatarSelector: ".profile__image",
});

/**
 *Abre y trae los datos del contenedor de perfil.
 */
function openPopupProfile() {
  popupFormProfile.open();

  const currentUserInfo = userInfo.getUserInfo();

  inputName.value = currentUserInfo.name;
  inputAboutMe.value = currentUserInfo.about;
}

/**
 * Cambio de datos al editar perfil y queden almacenado
 *los valores nuevos
 */
async function editProfile() {
  closePopupEditProfile.close();

  userInfo.setUserInfo({
    name: inputName.value,
    about: inputAboutMe.value,
  });

  try {
    const res = await api.saveDataToServer(inputName.value, inputAboutMe.value);

    return res;
  } catch (err) {
    console.log(err);
  }
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

  const data = { name: inputTitlePlace.value, link: inputNewImage.value };

  const api = new Api();

  api
    .addNewCardToServer(data.name, data.link)
    .then((response) => {
      data.canBeDelete = true;
      data._id = response._id;
      const cardElement = new Card(data, {
        api,
        modalConfirmAction,
      }).generateCard();

      elementsSectionCard.prepend(cardElement);

      inputTitlePlace.value = "";
      inputNewImage.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addEventListeners() {
  modalExpandedImageCloseBtn.addEventListener("click", closeModalExpandedImage);
  modalExpandedImage.addEventListener("click", closeModalExpandedImage);
  btnEditInfoProfile.addEventListener("click", openPopupProfile);
  btnOpenFormAddImage.addEventListener("click", openPopupAddImage);
  addPictureFormClose.addEventListener("click", closePopupAddImage);

  document.addEventListener("keydown", closeModal);
}
