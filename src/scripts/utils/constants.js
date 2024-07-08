import audiImage from '../../images/audi.jpg';
import porscheImage from '../../images/porsche.jpg';
import mercedesImage from '../../images/mercedes.jpg';

const exampleCardsInfo = [
    {
        image: mercedesImage,
        mark: 'Mercedes-Benz',
        model: 'AMG GT'
    },
    {
        image: porscheImage,
        mark: 'Porsche',
        model: 'Panamera GTS'
    },
    {
        image: audiImage,
        mark: 'Audi',
        model: 'A5'
    }
]

const buttonsAddCard = document.querySelectorAll('.control__button_add-card');
const buttonsSign = document.querySelectorAll('.header__button_sign-in');
const buttonsRegistry = document.querySelectorAll('.header__button_registry');
const cardsList = document.querySelector('.cards-list');
let footerCoordinates = document.querySelector('.footer').offsetTop;
const buttonsAuthorization = document.querySelectorAll('.header__button');
const buttonsControl = document.querySelectorAll('.control__button');
const fixedBlockMenu = document.querySelector('.fixed-block');

function freshFooterCoordinateValue() {
    footerCoordinates = document.querySelector('.footer').offsetTop;
}

export { exampleCardsInfo, buttonsAddCard, buttonsRegistry, buttonsSign, cardsList, fixedBlockMenu, footerCoordinates, freshFooterCoordinateValue, buttonsAuthorization, buttonsControl }