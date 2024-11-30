import Card from "../scripts/components/Card.js";
import PopupWithFormAddCard from "../scripts/components/PopupWithFormAddCard.js";
import PopupWithFormSignIn from "../scripts/components/PopupWithFormSignIn.js";
import PopupWithFormSignUp from "../scripts/components/PopupWithFormSignUp.js";
import {
  exampleCardsInfo,
  buttonsAddCard,
  buttonsRegistry,
  buttonsSign,
  cardsList,
  freshFooterCoordinateValue,
} from "../scripts/utils/constants.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Scroll from "../scripts/components/Scroll.js";
import DeleteCards from "../scripts/components/DeleteCards.js";

import "./index.css";

buttonsAddCard.forEach((item) => {
  item.addEventListener("click", function () {
    popupWithFormAddCard.openPopup();
  });
});

buttonsSign.forEach((item) => {
  item.addEventListener("click", function () {
    popupWithFormSignIn.openPopup();
  });
});

buttonsRegistry.forEach((item) => {
  item.addEventListener("click", function () {
    popupWithFormSignUp.openPopup();
  });
});

function createCard(objectItem) {
  const cardObject = new Card({
    objectItem,
    templateSelector: ".card-template",
    getCardImageSrc(imageSrcValue) {
      popupWithImage.setPopupImageSrc(imageSrcValue);
      popupWithImage.openPopup();
    },
  });

  const cardElement = cardObject.addCard();

  cardsList.prepend(cardElement);

  freshFooterCoordinateValue();
}

exampleCardsInfo.forEach((item) => {
  createCard(item);
});

const popupWithFormAddCard = new PopupWithFormAddCard({
  popupSelector: ".popup_add-form",
  submit(dataObj) {
    createCard(dataObj);
    popupWithFormAddCard.closePopup();
    deleteCards.newCardForDelete();
  },
});

popupWithFormAddCard.setEventListeners();

const popupWithFormSignIn = new PopupWithFormSignIn({
  popupSelector: ".popup_sign-form",
  submit(dataObj) {
    popupWithFormSignIn.closePopup();
    alert("а вот и нет профиля");
    dataObj = {};
  },
});

popupWithFormSignIn.setEventListeners();

const popupWithFormSignUp = new PopupWithFormSignUp({
  popupSelector: ".popup_registry-form",
  submit(dataObj) {
    popupWithFormSignUp.closePopup();
    alert("а вот и нет профиля");
    dataObj = {};
  },
});

popupWithFormSignUp.setEventListeners();

const popupWithImage = new PopupWithImage({
  popupSelector: ".popup_card-image",
});

popupWithImage.setEventListeners();

const scrollY = new Scroll();
scrollY.scrollWork();

const deleteCards = new DeleteCards(
  scrollY.toggleFixedBlockVisible,
  scrollY.contentTopCoordinates
);

deleteCards.setEventListeners();

deleteCards.firstChooseCardsForDelete();
