import PopupWhitImage from "./PopupWithImage.js";

export default class Card {
  constructor(
    { name, link, _id, canBeDelete, likes },
    { api, modalConfirmAction },
    userId
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._canBeDelete = canBeDelete;
    this._likes = likes;
    this._userId = userId;

    this._popupWithImage = new PopupWhitImage(".modal");
    this._api = api;
    this._modalConfirmAction = modalConfirmAction;
  }

  _getTemplateCard() {
    const cardTemplete = document.querySelector("#card-template").content;
    const cardElement = cardTemplete
      .querySelector(".elements__card-container")
      .cloneNode(true);

    return cardElement;
  }

  async _handleLikeIconToServer() {
    this.likeBtn.classList.toggle(
      "elements__card-container-footing-btn_active"
    );

    try {
      if (
        this.likeBtn.classList.contains(
          "elements__card-container-footing-btn_active"
        )
      ) {
        const result = await this._api.addLikeFromCard(this._id);

        this.likeBtn.classList.add(
          "elements__card-container-footing-btn_active"
        );
        this.likesCountElement.textContent = result.likes.length;
      } else {
        const resultDelete = await this._api.deleteLikeFromCard(this._id);
        this.likeBtn.classList.remove(
          "elements__card-container-footing-btn_active"
        );
        this.likesCountElement.textContent = resultDelete.likes.length;
      }

      this._updateLikesDisplay();
    } catch (err) {
      console.log(err);
    }
  }

  _updateLikesDisplay() {
    const likesCount = parseInt(this.likesCountElement.textContent);
    if (likesCount === 0) {
      this.likesCountElement.style.display = "none";
    } else {
      this.likesCountElement.style.display = "inline-block";
    }
  }

  _handleOpenExpandedImage() {
    this._popupWithImage.open(this._link, this._name);
  }

  _deleteCard() {
    this._modalConfirmAction.loadingAction(true);
    this._api
      .deleteCardFromServer(this._id)
      .then(() => {
        this.element.remove();
        this._modalConfirmAction.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this._modalConfirmAction.loadingAction(false);
      });
  }

  _setEventListeners() {
    this.likeBtn.addEventListener("click", () => {
      this._handleLikeIconToServer();
    });

    this.elementImageCard.addEventListener("click", () => {
      this._handleOpenExpandedImage();
    });

    if (this._canBeDelete) {
      this.btnDelete = this.element.querySelector(
        ".elements__card-container-btn-delete"
      );

      this.btnDelete.addEventListener("click", () => {
        this._modalConfirmAction.open(this._deleteCard.bind(this));
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
    this.likeBtn = this.element.querySelector(
      ".elements__card-container-footing-btn"
    );

    this.elementImageCard = this.element.querySelector(
      ".elements__card-container-image"
    );

    this.elementTitleCard = this.element.querySelector(
      ".elements__card-container-footing-title"
    );

    this.likesCountElement = this.element.querySelector(
      ".elements__like-counter"
    );

    this.likesCountElement.textContent = this._likes.length;

    if (this.likesCountElement.textContent === "0") {
      this.likesCountElement.style.display = "none";
    } else {
      const myLike = this._likes.find((evt) => {
        return evt._id === this._userId;
      });

      if (myLike) {
        this.likeBtn.classList.add(
          "elements__card-container-footing-btn_active"
        );
      }
    }

    this._setEventListeners();

    this.elementImageCard.src = this._link;
    this.elementImageCard.alt = this._name;
    this.elementTitleCard.textContent = this._name;
    this.element.setAttribute("data-id", this._id);

    return this.element;
  }
}
