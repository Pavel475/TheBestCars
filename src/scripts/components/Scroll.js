import { fixedBlockMenu, footerCoordinates } from "../utils/constants.js"; 

export default class Scroll {
    constructor() {
        this._fixedBlockMenu = fixedBlockMenu;
        this._fixedBlockContent = this._fixedBlockMenu.querySelector('.fixed-block__content');
        this._fixedAuth = this._fixedBlockContent.querySelector('.fixed-block__user-auth');
        this._fixedAuthSign = this._fixedAuth.querySelector('.header__button_sign-in');
        this._fixedAuthReg = this._fixedAuth.querySelector('.header__button_registry');
        this._controlButtons = this._fixedBlockContent.querySelector('.control__buttons-container');
        this._fixedBack = document.querySelector('.content__background-image');
        this._fixedAreaRightBottom = document.querySelector('.fixed-block-right-bottom');
        this._fixedButtonArrowImage = this._fixedAreaRightBottom.querySelector('.fixed-block-right-bottom__button-image');
        this._footer = document.querySelector('.footer');
        this.contentTopCoordinates = document.querySelector('.content').offsetTop;
    }

    _setAttribute() {
        this._fixedAuth.classList.add('header__user-auth_row');
        this._fixedAuthSign.classList.add('header__button_state');
        this._fixedAuthReg.classList.add('header__button_state');
        this._controlButtons.setAttribute('style', 'padding: 0');
    }

    toggleFixedBlockVisible(contentTopCoordinates) {
        let scrollOnTheY = window.pageYOffset;
        if ( scrollOnTheY > contentTopCoordinates ) {
            if ( this._fixedBlockMenu.classList.contains('fixed-block_hidden') ) {
                this._fixedBlockMenu.classList.remove('fixed-block_visible');
            } else {
                this._fixedBlockMenu.classList.add('fixed-block_visible');
            }
        }
    }

    _setEventListeners() {
        document.addEventListener('scroll', () => {
            let scrollOnTheY = window.pageYOffset;
            let userScrollHeightWindow = window.pageYOffset + window.innerHeight;

            if ( scrollOnTheY > this.contentTopCoordinates ) {
                if ( !(this._fixedBlockMenu.classList.contains('fixed-block_hidden')) ) {
                    this._fixedBlockMenu.classList.add('fixed-block_visible');
                } 

                if ( userScrollHeightWindow > footerCoordinates || userScrollHeightWindow === footerCoordinates ) {
                    this._fixedBack.classList.add('content__background-image_position-absolute-mode');
                    this._fixedAreaRightBottom.classList.add('fixed-block-right-bottom_absolute-mode');
                } else {
                    this._fixedBack.classList.remove('content__background-image_position-absolute-mode');
                    this._fixedAreaRightBottom.classList.remove('fixed-block-right-bottom_absolute-mode');
                }

                if (this._fixedBack.classList.contains('content__background-image_position-absolute-mode')) {
                    this._fixedBack.classList.remove('content__background-image_position-fixed-mode');
                } else {
                    this._fixedBack.classList.add('content__background-image_position-fixed-mode');
                }

            } else {
                this._fixedBlockMenu.classList.remove('fixed-block_visible');
                this._fixedBack.classList.remove('content__background-image_position-fixed-mode');
                this._fixedBack.classList.remove('content__background-image_position-absolute-mode');
                this._fixedAreaRightBottom.classList.remove('fixed-block-right-bottom_absolute-mode');
            }

            if ( scrollOnTheY > 550 ) {
                this._fixedButtonArrowImage.classList.add('fixed-block-right-bottom__button-image_visible');
            } else {
                this._fixedButtonArrowImage.classList.remove('fixed-block-right-bottom__button-image_visible');
            }
        });

        this._fixedButtonArrowImage.addEventListener('click', () => {
            window.scrollTo(0, 0);
        })
    }

    scrollWork() {
        this._setAttribute();
        this._setEventListeners();
    }
}