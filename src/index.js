import "./styles/index.css";
import Card from "../src/utils/Card.js";
import FormValidator from "../src/pages/FormValidator.js";
import Section from "../src/components/Section.js";
import { settingElement, selector } from "../src/utils/constants.js";
import {
  addEventListeners,
  api,
  modalConfirmAction,
} from "../src/utils/utils.js";
import UserInfo from "./utils/UserInfo";

(async function () {
  const cards = await api.getCards();
  const userInfoFromServer = await api.getUserInfoFromServer();
  const idUser = userInfoFromServer._id;

  const renderInitialCards = new Section(
    {
      items: cards.map((card) => {
        const canBeDelete = card.owner._id == idUser;

        return {
          name: card.name,
          link: card.link,
          _id: card._id,
          canBeDelete: canBeDelete,
        };
      }),
      renderer: (cardItem) => {
        const card = new Card(cardItem, { api, modalConfirmAction });
        const cardElement = card.generateCard();

        renderInitialCards.addItem(cardElement);
      },
    },
    selector
  );

  renderInitialCards.renderer();

  (function init() {
    const formList = Array.from(
      document.querySelectorAll(".popup__container-form")
    );

    formList.forEach((formElement) => {
      const formValidator = new FormValidator(settingElement, formElement);
      formValidator.enableValidation();
    });

    async function infoProfile() {
      const userInfo = new UserInfo({
        nameUserSelector: ".profile__info-name",
        jobUserSelector: ".profile__info-about",
        avatarSelector: ".profile__image",
      });

      userInfo.setUserInfo({
        name: userInfoFromServer.name,
        about: userInfoFromServer.about,
        avatar: userInfoFromServer.avatar,
      });
    }

    infoProfile();
  })();

  addEventListeners();
})();
