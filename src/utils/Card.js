import PopupWhitImage from "./PopupWithImage.js";
import { basePath } from "./utils.js";

export default class Card {
  constructor(data) {
    this._name = data.name;
    this._src = data.src;
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

this.computedStyle = window.getComputedStyle(this.element);
this.backgroundImage = this.computedStyle.getPropertyValue("background-image");
this.modifiedBackgroundImage = this.backgroundImage.replace(basePath+"url(../../../../images/like-btn-active.png)");
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

    this.btnDelete = this.element.querySelector(
      ".elements__card-container-btn-delete"
    );

    this.btnDelete.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this.elementImageCard.addEventListener("click", () => {
      this._handleOpenExpandedImage();
    });
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
