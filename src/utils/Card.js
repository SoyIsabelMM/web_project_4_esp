import Api from "./Api.js";
import PopupWhitImage from "./PopupWithImage.js";

export default class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._canBeDelete = data.canBeDelete;

    this._modalWithImage = new PopupWhitImage(".modal");

    this._api = new Api();
  }

  _getTemplateCard() {
    const cardTemplete = document.querySelector("#card-template").content;
    const cardElement = cardTemplete
      .querySelector(".elements__card-container")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeIconToServer() {
    this.element
      .querySelector(".elements__card-container-footing-btn")
      .classList.toggle("elements__card-container-footing-btn_active");

    const likeCount = this.likesCountElement.textContent;
    const currentLikes = parseInt(likeCount);

    if (
      this.likeBtn.classList.contains(
        "elements__card-container-footing-btn_active"
      )
    ) {
      this.likesCountElement.textContent = (currentLikes + 1).toString();
    } else {
      this.likesCountElement.textContent = (currentLikes - 1).toString();
    }

    if (this.likesCountElement.textContent === "0") {
      this.likesCountElement.style.display = "none";
    } else {
      this.likesCountElement.style.display = "inline-block";
    }
  }

  _handleOpenExpandedImage() {
    this._modalWithImage.open(this._link, this._name);
  }

  _handleOpenFormDelete() {
    this.containerForms = document.querySelector(".modal-window");
    this.formDeleteCard = this.containerForms.querySelector(".modal-window__container");
    this.btnConfirm = this.formDeleteCard.querySelector(".modal-window__btn-delete");
    
    this.containerForms.classList.remove("open");
    this.formDeleteCard.classList.remove("open");
  }

  _handleCloseBtnConfirmYes() {

    // this.containerForms.classList.add("open");
    // this.formDeleteCard.classList.add("open");
  }

  _handleDeleteCardToServer() {
    const confirmation = this._handleOpenFormDelete();

    if (confirmation) {
      this._api
        .deleteCardFromServer(this._id)
        .then(() => {
          this.btnConfirm.addEventListener("click", () => {
            console.log("aqui estoy");
          });
        })
        .then(() => {
          this.element.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _setEventListeners() {
    this.likeBtn = this.element.querySelector(
      ".elements__card-container-footing-btn"
    );

    this.likeBtn.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this.elementImageCard.addEventListener("click", () => {
      this._handleOpenExpandedImage();
    });

    if (this._canBeDelete) {
      this.btnDelete = this.element.querySelector(
        ".elements__card-container-btn-delete"
      );

      this.btnDelete.addEventListener("click", () => {
        this._handleDeleteCardToServer();
      });
    } else {
      const deleteBtn = this.element.querySelector(
        ".elements__card-container-btn-delete"
      );

      deleteBtn.style.display = "none";
    }
  }

  generateCard() {
    this.element = this._getTemplateCard();
    this.elementImageCard = this.element.querySelector(
      ".elements__card-container-image"
    );
    this.elementTitleCard = this.element.querySelector(
      ".elements__card-container-footing-title"
    );

    this.likesCountElement = this.element.querySelector(
      ".elements__like-counter"
    );
    this.likesCountElement.textContent = "0";

    if (this.likesCountElement.textContent === "0") {
      this.likesCountElement.style.display = "none";
    }

    this._setEventListeners();

    this.elementImageCard.src = this._link;
    this.elementImageCard.alt = this._name;
    this.elementTitleCard.textContent = this._name;
    this.element.setAttribute("data-id", this._id);

    return this.element;
  }
}
