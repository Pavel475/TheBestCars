import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submit}) {
        super({popupSelector});
        this._popupElementForm = this._popupElement.querySelector('.popup__form');
        this._popupElementFormInputs = this._popupElementForm.querySelectorAll('.popup__input');
        this._submit = submit;
    }

    _getInputsValues() {
        const dataObj = {}
        this._popupElementFormInputs.forEach( input => {
            dataObj[input.name] = input.value;
        });

        return dataObj;
    }

    _transferInputValues() {
        this._submit(this._getInputsValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElementForm.addEventListener('submit', (evt) => {
            this._transferInputValues();
            evt.preventDefault();
            this._clearInputsValues();
        });
    }

    _clearInputsValues() {
        this._popupElementFormInputs.forEach( input => {
            input.value = '';
        });
    }

    closePopup() {
        super.closePopup();
        this._clearInputsValues();
    }
}