import PopupWhitImage from "./PopupWithImage.js";

export default class Card {
  constructor(data) {
    this._name = data.name;
    this._src = data.src;
    this._canBeDelete = true;
    this._modalWithImage = new PopupWhitImage(".modal");
  }

  _getTemplateCard() {
    const cardTemplete = document.querySelector("#card-template").content;
    const cardElement = cardTemplete
      .querySelector(".elements__card-container")
      .cloneNode(true);

    return cardElement;
  }

  _handleDeleteCard() {
    this.element.remove();
  }

  _handleLikeIcon() {
    this.element
      .querySelector(".elements__card-container-footing-btn")
      .classList.toggle("elements__card-container-footing-btn_active");
  }

  _handleOpenExpandedImage() {
    this._modalWithImage.open(this._src, this._name);
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

    if (!this._canBeDelete) {
      this.btnDelete = this.element.querySelector(
        ".elements__card-container-btn-delete"
      );
  
      this.btnDelete.addEventListener("click", () => {
        this._handleDeleteCard();

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

    this._setEventListeners();

    this.elementImageCard.src = this._src;
    this.elementImageCard.alt = this._name;
    this.elementTitleCard.textContent = this._name;

    return this.element;
  }
}
