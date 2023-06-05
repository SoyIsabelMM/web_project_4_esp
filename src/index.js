import "./styles/index.css";
import Card from "../src/utils/Card.js";
import FormValidator from "../src/pages/FormValidator.js";
import Section from "../src/components/Section.js";
import {
  initialCards,
  settingElement,
  selector,
} from "../src/utils/constants.js";
import { addEventListeners } from "../src/utils/utils.js"
import Api from "./utils/Api";

(async function() {
const api =  new Api();
const cards = await api.getCards();

const renderInitialCards = new Section(
  {
    items: cards.map((evt) => {
      return {
        name: evt.name,
        link: evt.link,
        canBeDelete: false,
      }
    }),
    renderer: (cardItem) => {
      const card = new Card(cardItem, "#card-Template");
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
})();

addEventListeners();

})();