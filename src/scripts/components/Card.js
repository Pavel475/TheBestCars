export default class Card {
    constructor({objectItem, templateSelector, getCardImageSrc}) {
        this._imageValue = objectItem.image;
        this._markValue = objectItem.mark;
        this._modelValue = objectItem.model;
        this._templateSelector = templateSelector;
        this._getCardImageSrc = getCardImageSrc;
    }

    _generateCard() {
        this._templateElementContent =
        document
        .querySelector(this._templateSelector)
        .content;

        this._element =  this._templateElementContent.querySelector('.card')
        .cloneNode(true);

        this._cardImage = this._element.querySelector('.card__image');
        this._cardImage.src = this._imageValue;
        this._cardMark = this._element.querySelector('.card__info-mark');
        this._cardMark.textContent = this._markValue;
        this._cardModel = this._element.querySelector('.card__info-model');
        this._cardModel.textContent = this._modelValue;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._cardImage.addEventListener('click', (evt) => {
           this._getCardImageSrc(evt.target.src);
        })
    }

    addCard() {
        return this._generateCard();
    }
}