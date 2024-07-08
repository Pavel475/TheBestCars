import { cardsList, freshFooterCoordinateValue, buttonsAuthorization, buttonsControl, fixedBlockMenu } from "../utils/constants.js";

export default class DeleteCards {
    constructor(toggleFixedBlockVisible, contentTopCoordinates) {
        this._cardsListArray = Array.from(cardsList.children);
        this._buttonOnModeDelete = document.querySelectorAll('.control__button_delete-card');
        this._buttonsContainerOnModeDelete = document.querySelector('.fixed-block-right-bottom__buttons-container');
        this._buttonOffModeDelete = document.querySelector('.fixed-block-right-bottom__button-text_cancel');
        this._buttonDeleteCards = document.querySelector('.fixed-block-right-bottom__button-text_delete');
        this._fixedButtonArrowImage = document.querySelector('.fixed-block-right-bottom__button-image');
        this._fixedBackgroundImage = document.querySelector('.content__background-image');
        this._cardToggleDelete = document.querySelectorAll('.card__button-image');
        this._cardDarkMode = document.querySelectorAll('.card__dark-overlay');
        this._cardImageDarkMode = document.querySelectorAll('.card__image');
        this._cardsAreaForDelete = [];
        this._buttonsAuthorization = buttonsAuthorization;
        this._buttonsControl = buttonsControl;
        this._fixedBlockMenu = fixedBlockMenu;
        this._toggleFixedBlockVisible = toggleFixedBlockVisible;
        this._contentTopCoordinates = contentTopCoordinates;
    }

    newCardForDelete() {
        this._cardsListArray = Array.from(cardsList.children);
        this._cardToggleDelete = document.querySelectorAll('.card__button-image');
        this._cardDarkMode = document.querySelectorAll('.card__dark-overlay');
        this._cardImageDarkMode = document.querySelectorAll('.card__image');
        this._nextChooseCardsForDelete();
    }

    _listenerDeleteCard(item) {
        const itemTogglebutton = item.querySelector('.card__button-image');
        const itemImageCar = item.querySelector('.card__image');
        const itemDarkTheme = item.querySelector('.card__dark-overlay');
        itemTogglebutton.addEventListener('click', () => {
            this._toggleCardStyle(item, itemImageCar, itemTogglebutton, itemDarkTheme);
            this._toggleCardForDelete(item);
        });
    }

    _nextChooseCardsForDelete() {
        this._cardsListArray.forEach((item) => {
            if (this._cardsListArray.indexOf(item) === 0) {
                this._listenerDeleteCard(item); 
            }
        });
    }

    firstChooseCardsForDelete() {
        this._cardsListArray.forEach((item) => {
            this._listenerDeleteCard(item);
        });
    }

    _toggleCardStyle(card, cardImageCar, cardToggleButton, cardDarkTheme) {
        if ( card.classList.contains('card_delete-theme') ) {
            card.classList.replace('card_delete-theme', 'card_approve-delete');
        } else {
            card.classList.replace('card_approve-delete', 'card_delete-theme');
        }
        cardImageCar.classList.toggle('card__image_dark-theme');
        cardDarkTheme.classList.toggle('card__dark-overlay_visible');
        cardToggleButton.classList.toggle('card__button-image_toggle-bacground-image');
    }

    _toggleCardForDelete(card) {
        if (card.classList.contains('card_approve-delete')) {
            this._cardsAreaForDelete.push(card);
        } else {
            this._cardsAreaForDelete.some((elem) => {
                if (this._cardsAreaForDelete.indexOf(elem) === this._cardsAreaForDelete.indexOf(card)) {
                    this._cardsAreaForDelete.splice(this._cardsAreaForDelete.indexOf(card), 1);
                }
            });
        }
    }

    setEventListeners() {
        this._buttonOnModeDelete.forEach((item) => {
            item.addEventListener('click', () => {
                this._onModeDelete();
            });
        });

        this._buttonDeleteCards.addEventListener('click', () => {
            this._deleteCards();
        });

        this._buttonOffModeDelete.addEventListener('click', () => {
            this._offModeDelete();
        })
    }

    _onModeDelete() {
        this._fixedBackgroundImage.classList.add('content__background-image_delete-theme');

        this._cardsListArray.forEach((item) => {
            item.classList.add('card_delete-theme');
        });

        this._buttonsContainerOnModeDelete.classList.add('fixed-block-right-bottom__buttons-container_visible');

        this._cardToggleDelete.forEach((img) => {
            img.classList.add('card__button-image_visible');
        });

        this._cardDarkMode.forEach((overlay) => {
            overlay.classList.add('card__dark-overlay_visible');
        });

        this._cardImageDarkMode.forEach((img) => {
            img.classList.add('card__image_dark-theme');
        });

        this._buttonsAuthorization.forEach((buttonItem) => {
            buttonItem.setAttribute('disabled', true);
        });

        this._buttonsControl.forEach((buttonItem) => {
            buttonItem.setAttribute('disabled', true);
        });

        this._fixedBlockMenu.classList.add('fixed-block_hidden');
        this._toggleFixedBlockVisible(this._contentTopCoordinates);

        this._fixedButtonArrowImage.classList.add('fixed-block-right-bottom__button-image_absolute');
    }

    _offModeDelete() {
        this._fixedBackgroundImage.classList.remove('content__background-image_delete-theme');

        this._cardsListArray.forEach((item) => {
            item.classList.remove('card_delete-theme');
        });

        this._buttonsContainerOnModeDelete.classList.remove('fixed-block-right-bottom__buttons-container_visible');

        this._cardToggleDelete.forEach((buttonItem) => {
            buttonItem.classList.remove('card__button-image_visible');
        });

        this._cardDarkMode.forEach((overlayItem) => {
            overlayItem.classList.remove('card__dark-overlay_visible');
        });

        this._cardImageDarkMode.forEach((imgItem) => {
            imgItem.classList.remove('card__image_dark-theme');
        });

        this._cardsAreaForDelete.forEach((item) => {
            item.querySelector('.card__button-image').classList.remove('card__button-image_toggle-bacground-image');
            item.classList.remove('card_approve-delete');
        });

        this._cardsAreaForDelete.splice(0, this._cardsAreaForDelete.length);

        this._buttonsAuthorization.forEach((buttonItem) => {
            buttonItem.removeAttribute('disabled');
        });

        this._buttonsControl.forEach((buttonItem) => {
            buttonItem.removeAttribute('disabled');
        });

        this._fixedBlockMenu.classList.remove('fixed-block_hidden');
        this._toggleFixedBlockVisible(this._contentTopCoordinates);

        this._fixedButtonArrowImage.classList.remove('fixed-block-right-bottom__button-image_absolute');
    }

    _deleteCards() {
        if (this._cardsAreaForDelete.length === 0) {
            alert('выберите хотя бы одну машину, чтобы удалить');
        } else {
            this._cardsAreaForDelete.forEach((item) => {
                item.remove();
                freshFooterCoordinateValue();
            });
            this._offModeDelete();
        }
    }
}