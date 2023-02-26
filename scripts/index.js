/**
 *Esta función nos ayuda abrir el modal para las imágenes.
 */
function closeModalExpandedImage() {
  modalExpandedImage.classList.toggle("modal_opened");
}

/**
 * Función para traer los datos del contenedor del perfil y
 * queden registrados.
 */
function openPopup() {
  popupFormeOpened.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAboutMe.value = profileAboutMe.textContent;
}

/**
 * función para cambio de datos en el popup de editar perfil y
 * quede almacenado en el contenedor de profile como valores nuevos
 */
function editProfile() {
  profileName.textContent = inputName.value;
  profileAboutMe.textContent = inputAboutMe.value;
}

/**
 * Aqui evitamos que la página se recargue una vez que presionamos el botón de editProfile
 * @param {evento} evt
 */
function saveInfoProfile(evt) {
  evt.preventDefault();
  editProfile();
}

/**
 * funcion para abrir y cerrar el popup para agregar nuevas imágenes
 */
function openPopupAddImage() {
  addPictureForm.classList.toggle("popup_opened");
}

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
    ".elements__card-container-image"
  );
  const elementTitleCard = cardElement.querySelector(
    ".elements__card-container-footing-title"
  );
  const likeBtn = cardElement.querySelector(
    ".elements__card-container-footing-btn"
  );

  elementImageCard.src = link;
  elementImageCard.alt = name;

  elementTitleCard.textContent = name;

  elementImageCard.addEventListener("click", openExpandedImageModal);

  const btnDelete = cardElement.querySelector(
    ".elements__card-container-btn-delete"
  );
  btnDelete.addEventListener("click", handleDeleteCard);

  likeBtn.addEventListener("click", handleLikeIcon);
  return cardElement;
}

/**
 * Con esta función podemos traer la información que se va a
 *  mostrar en el modal de imagenes grandes, también al
 *  presionar el botón de guardar se cierra el modal
 */
function openExpandedImageModal() {
  const elemetImage = this.src;
  const elementTitle = this.alt;

  const imageContainer = modalExpandedImage.querySelector(".modal__image-card");
  imageContainer.src = elemetImage;

  const titleContainer = modalExpandedImage.querySelector(".modal__title-text");
  titleContainer.textContent = elementTitle;

  modalExpandedImage.classList.toggle("modal_opened");
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

  elementsSectionCard.prepend(cardElement);

  inputTitlePlace.value = "";
  inputNewImage.value = "";

  openPopupAddImage();
}

/**
 * En esta sección vamos a manipular el botón de la papelera
 */
function handleDeleteCard() {
  this.closest(".elements__card-container").remove();
}

/**
 *
 * @param {evento} evt En esta seccion vamos hacer que nuestro boton like funcione
 */

function handleLikeIcon(evt) {
  evt.target.classList.toggle("elements__card-container-footing-btn_active");
}

modalExpandedImage.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("modal")) {
    closeModalExpandedImage();
  }
});


/**
 * Función para almacenar todos los eventos para los botones, popup y modal
 */
function addEventListeners() {
  modalExpandedImageCloseBtn.addEventListener("click", closeModalExpandedImage);
  btnEditInfoProfile.addEventListener("click", openPopup);
  closeBtnPopup.addEventListener("click", openPopup);
  closePopupEditProfile.addEventListener("click", openPopup);
  btnSaveProfileInfo.addEventListener("click", saveInfoProfile);
  btnSaveProfileInfo.addEventListener("click", openPopup);
  btnOpenFormAddImage.addEventListener("click", openPopupAddImage);
  addPictureFormClose.addEventListener("click", openPopupAddImage);
  closePopupNewImage.addEventListener("click", openPopupAddImage);
  createNewImageBtn.addEventListener("click", addNewCardElement);
}

addEventListeners();
