let btnEdit = document.querySelector(".profile__info-edit-btn");
let closeBtnPopup = document.querySelector(".popup__container-close-popup");
let formPopup = document.querySelector(".popup_opened");

let inputName = document.querySelector("#name");
let inputAboutMe = document.querySelector("#about-me");
let profileName = document.querySelector(".profile__info-name");
let profileAboutMe = document.querySelector(".profile__info-about");
let btnSave = document.querySelector(".popup__container-save-btn");

let form = document.querySelector(".popup__container-form");

function openPopup() {
  formPopup.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAboutMe.value = profileAboutMe.textContent;
}

btnEdit.addEventListener("click", openPopup);
closeBtnPopup.addEventListener("click", openPopup);

function editProfile() {
  profileName.textContent = inputName.value;
  profileAboutMe.textContent = inputAboutMe.value;
}

function evtSaveInfo(evt) {
  evt.preventDefault();
  editProfile();
}

btnSave.addEventListener("click", evtSaveInfo);
btnSave.addEventListener("click", openPopup);

function cleaninput() {
  form.classList.reset("#name");
}

form.addEventListener("click", cleaninput);

//aquí vamos a poder abrir nuestro form de addpicture

const btnOpenFormAddImage = document.querySelector(".profile__add-btn");
const addPictureForm = document.querySelector("#add-picture-form");
const addPictureFormClose = document.querySelector(
  "#add-picture-form .popup__container-close-popup"
);

function openModalAddImage() {
  addPictureForm.classList.toggle("popup_opened");
}

btnOpenFormAddImage.addEventListener("click", openModalAddImage);
addPictureFormClose.addEventListener("click", openModalAddImage);

//Aqui vamos a poder agregar imagenes

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

const elementsSectionCard = document.querySelector(".elements");
const cardTemplete = document.querySelector("#card-template").content;

/**
 * Con esta funcion clonamos el template de nuestras cartas que van a
 *  aparecer al inicio de nuestro proyecto
 * @param {string} link
 * @param {string} name
 * @returns
 */
function getCardElement(link, name) {
  const cardElement = cardTemplete.cloneNode(true);
  const elementImageCard = cardElement.querySelector(
    ".elements__element-image"
  );
  const elementTitleCard = cardElement.querySelector(
    ".elements__element-container-title"
  );

  elementImageCard.src = link;
  elementImageCard.alt = name;

  elementTitleCard.textContent = name;

  return cardElement;
}

/**
 *  @description Con esta función llamamos los valores del
 * contenido de nuestras cards que están almacenados en el array initialCards
 *
 */
function renderInitialCards() {
  for (const card of initialCards) {
    const cardElement = getCardElement(card.src, card.name);
    elementsSectionCard.append(cardElement);
  }
}

renderInitialCards();

// Vamos a crearle una acción al bóton crear

const createNewImageBtn = document.querySelector(
  "#add-picture-form .popup__container-save-btn"
);

/**
 * Con está función vamos a poder crear las nuevas cards con valores nuevos que trae de los input
 * adicional en la misma función haremos que cierre y que cuando volvamos a presionar el boton add
 * los input aparezcan vacios, solo mostrando los placeholder
 */
function addNewCardElement() {
  const inputTitlePlace = document.querySelector("#title-place");
  const inputNewImage = document.querySelector("#new-image");

  const cardElement = getCardElement(
    inputNewImage.value,
    inputTitlePlace.value
  );

  const btnDelete = cardElement.querySelector(".elements__element-btn-delete");

  elementsSectionCard.prepend(cardElement);

  inputTitlePlace.value = "";
  inputNewImage.value = "";

  btnDelete.addEventListener("click", btnDeleteCard);

  openModalAddImage();
}

createNewImageBtn.addEventListener("click", addNewCardElement);

//En esta sección vamos a manipular el botón de la papelera

function btnDeleteCard() {
  this.closest(".elements__element").remove();
}

const btnDelete = document.querySelectorAll(".elements__element-btn-delete");

for (const card of btnDelete) {
  card.addEventListener("click", btnDeleteCard);
}

