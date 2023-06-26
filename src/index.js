import "./styles/index.css";
import Card from "./components/Card.js";
import FormValidator from "../src/pages/FormValidator.js";
import Section from "../src/components/Section.js";
import { settingElement, selector } from "../src/utils/constants.js";
import {
  addEventListeners,
  api,
  modalConfirmAction,
  userInfo,
} from "../src/utils/utils.js";

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
    formList.push(document.querySelector(".modal-window__form-change-image"));

    formList.forEach((formElement) => {
      const formValidator = new FormValidator(settingElement, formElement);
      formValidator.enableValidation();
    });

    async function infoProfile() {
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
