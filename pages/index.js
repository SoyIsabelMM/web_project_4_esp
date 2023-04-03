import Card from "../utils/Card.js";
import FormValidator from "./FormValidator.js";
import Section from "../components/Section.js";
import { initialCards, settingElement, selector } from "../utils/constants.js";

const renderInitialCards = new Section(
  {
    items: initialCards,
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
