export default class Popup {
    constructor({popupSelector}) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupElementClose = this._popupElement.querySelector('.popup__close');
    }

    openPopup() {
        this._popupElement.classList.add('popup_opened');
    }

    setEventListeners() {
        this._popupElementClose.addEventListener('click', () => {this.closePopup()});
    }

    closePopup() {
        this._popupElement.classList.remove('popup_opened');
    }
}