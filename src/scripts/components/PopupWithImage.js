import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupElementContainer = this._popupElement.querySelector(
      ".popup__image-container"
    );
    this._popupElementImage =
      this._popupElementContainer.querySelector(".popup__image");
  }

  setPopupImageSrc(image) {
    this._popupElementImage.src = image;
  }

  closePopup() {
    super.closePopup();
    setTimeout(() => {
      this._popupElementImage.src = "";
    }, 500);
  }
}
