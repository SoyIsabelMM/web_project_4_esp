

export default class Card {
  constructor(data) {
    this._name = data.name;
    this._src = data.src;
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
    this.elementImageCard = this._src;
    this.elementTitleCard = this._name;

    const modalexpandedImage = document.querySelector(".modal");
    this.containerImage = modalexpandedImage.querySelector(
      ".modal__image-card"
    ).src = this.elementImageCard;

    this.ContainerTitle = modalexpandedImage.querySelector(
      ".modal__title-text"
    ).textContent = this.elementTitleCard;

    modalexpandedImage.classList.toggle("modal_opened");
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
