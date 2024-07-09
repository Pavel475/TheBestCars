import { fixedBlockMenu, footerCoordinates } from "../utils/constants.js"; 

export default class Scroll {
    constructor() {
        this._fixedBlockMenu = fixedBlockMenu;
        this._fixedAreaRightBottom = document.querySelector('.fixed-block-right-bottom');
        this._fixedButtonArrowImage = this._fixedAreaRightBottom.querySelector('.fixed-block-right-bottom__button-image');
        this.contentTopCoordinates = document.querySelector('.content').offsetTop;
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

            if ( userScrollHeightWindow > footerCoordinates ) {
                this._fixedAreaRightBottom.classList.add('fixed-block-right-bottom_absolute-mode');
            } else {
                this._fixedAreaRightBottom.classList.remove('fixed-block-right-bottom_absolute-mode');
            }

            if ( scrollOnTheY > this.contentTopCoordinates + 70 ) {
                if ( !(this._fixedBlockMenu.classList.contains('fixed-block_hidden')) ) {
                    this._fixedBlockMenu.classList.add('fixed-block_visible');
                } else {
                    this._fixedBlockMenu.classList.remove('fixed-block_visible');
                }
            } else {
                this._fixedBlockMenu.classList.remove('fixed-block_visible');
            }

            if ( scrollOnTheY > 550 ) {
                this._fixedButtonArrowImage.classList.add('fixed-block-right-bottom__button-image_visible');
            } else {
                this._fixedButtonArrowImage.classList.remove('fixed-block-right-bottom__button-image_visible');
            }
        });

        this._fixedButtonArrowImage.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }

    scrollWork() {
        this._setEventListeners();
    }
}