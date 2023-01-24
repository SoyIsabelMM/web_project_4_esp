let btnEdit = document.querySelector(".profile__info-edit-btn");
let closeBtnPopup = document.querySelector(".popup__container-close-popup");
let formPopup = document.querySelector(".popup_opened");

let inputName = document.querySelector("#name");
let inputAboutMe = document.querySelector("#about-me");
let profileName = document.querySelector(".profile__info-name");
let profileAboutMe = document.querySelector(".profile__info-about");
let btnSave = document.querySelector(".popup__container-save-btn");

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
