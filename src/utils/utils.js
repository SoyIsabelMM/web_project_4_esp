import Card from "../components/Card.js";
import {
  elementsSectionCard,
  modalExpandedImage,
  modalExpandedImageCloseBtn,
  btnEditInfoProfile,
  inputName,
  inputAboutMe,
  btnOpenFormAddImage,
  addPictureFormClose,
  formChangeImage,
  btnKeep,
  inputChangeUrlImage,
  settingElement,
  apiKey,
} from "./constants.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import ModalConfirmAction from "../components/ModalConfirmAction.js";
import ModalAvatarForm from "../components/ModalAvatarForm.js";

export const api = new Api({ apiKey });

export const modalConfirmAction = new ModalConfirmAction();

const modalAvatarForm = new ModalAvatarForm();

const popupFormProfile = new PopupWithForm("#edit-profile-form", editProfile);
const popupEditProfile = new Popup("#edit-profile-form");

export const userInfo = new UserInfo(
  {
    nameUserSelector: ".profile__info-name",
    jobUserSelector: ".profile__info-about",
    avatarSelector: ".profile__image",
  },
  api
);

/**Guarda la nueva imagén de perfil */
function changeImage() {
  modalAvatarForm.loadingAction(true);
  formChangeImage.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newAvatarUrl = inputChangeUrlImage.value;
    api
      .updateAvatar(newAvatarUrl)
      .then((res) => {
        userInfo.setUserInfo({ avatar: newAvatarUrl });
        modalAvatarForm.close();
        return res;
      })
      .then(() => {
        inputChangeUrlImage.value = "";
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        modalAvatarForm.loadingAction(false);
        enableBtnPhotoProfile();
      });
  });
}

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
  userInfo.setUserInfo({
    name: inputName.value,
    about: inputAboutMe.value,
  });

  try {
    popupFormProfile.loadingAction(true);
    const res = await api.saveDataToServer(inputName.value, inputAboutMe.value);

    enableBtn();

    return res;
  } catch (err) {
    console.log(err);
  } finally {
    popupFormProfile.loadingAction(false);
    popupEditProfile.close();
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

function openPopupAddImage() {
  enableBtn();
  popupFormAddPicture.open();
}

function closePopupAddImage() {
  popupFormAddPicture.close();
}

function saveNewImage() {
  addNewCardElement();
}

async function addNewCardElement() {
  const inputTitlePlace = document.querySelector("#title-place");
  const inputNewImage = document.querySelector("#new-image");

  const data = { name: inputTitlePlace.value, link: inputNewImage.value };

  try {
    popupFormAddPicture.loadingAction(true);
    const response = await api.addNewCardToServer(data.name, data.link);

    data.canBeDelete = true;
    data._id = response._id;
    const cardElement = new Card(data, {
      api,
      modalConfirmAction,
    }).generateCard();

    elementsSectionCard.prepend(cardElement);

    inputTitlePlace.value = "";
    inputNewImage.value = "";
  } catch (err) {
    console.log(err);
    alert("Se ha producido un error");
  } finally {
    popupFormAddPicture.loadingAction(false);
    popupFormAddPicture.close();
  }
}

function enableBtn() {
  const botton = document.querySelectorAll(settingElement.submitButtonSelector);
  botton.forEach((evt) => {
    evt.classList.add(settingElement.inactiveButtonClass);
    evt.setAttribute("disabled", true);
  });
}

function enableBtnPhotoProfile() {
  btnKeep.classList.add(settingElement.inactiveButtonClass);
  btnKeep.setAttribute("disabled", true);
}

export function addEventListeners() {
  modalExpandedImageCloseBtn.addEventListener("click", closeModalExpandedImage);
  modalExpandedImage.addEventListener("click", closeModalExpandedImage);
  btnEditInfoProfile.addEventListener("click", openPopupProfile);
  btnOpenFormAddImage.addEventListener("click", openPopupAddImage);
  addPictureFormClose.addEventListener("click", closePopupAddImage);
  btnKeep.addEventListener("click", changeImage);
  document.addEventListener("keydown", closeModal);
}

popupFormProfile.setEventListeners();

popupFormAddPicture.setEventListeners();
