import './sass/main.scss';
import debounce from 'lodash.debounce';
import notifications from './js/notifications'
import pictureCard from './templates/picture-card.hbs'
import PixbyApiService from './js/pixbyApiService'
import Btn from './load-more-btn'




const refs = {
    searchForm: document.querySelector('#search-form'),
    galleryContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('#loadMore'),
    searchBtn:document.querySelector('.search-btn')
}

const pixbyApiService = new PixbyApiService()
const loadMoreBtn = new Btn({ selector: "#button",})

// ОБРАБОТЧИК ВВОДА ЗАПРОСА
refs.searchForm.addEventListener('change',onChangeSearchForm)


// ПОИСК ПО ВВОДУ В ИПУТ
function onChangeSearchForm(e) {
    clearGalleryContainer()
    pixbyApiService.query = e.currentTarget.elements.query.value
    pixbyApiService.resetPage()
    pixbyApiService.fetchPicturesByName().then(insertPictureCardMarkup)
};

// ОБРАБОТЧИК КЛИКА ПО КНОПКЕ LOAD MORE...
loadMoreBtn.refs.button.addEventListener('click',onLoadMoreClick)


// ЗАГРУЗКА ДОПОЛНИТЕЛЬНЫХ ИЗОБРАЖЕНИЙ ПО КЛИКУ
function onLoadMoreClick() {
    pixbyApiService.fetchPicturesByName().then(insertPictureCardMarkup)
}
function insertPictureCardMarkup(pictures) {
    const markup = pictureCard(pictures)
    refs.galleryContainer.insertAdjacentHTML('beforeend',markup)
}
function clearGalleryContainer() {
    refs.galleryContainer.innerHTML=''
}





console.log(loadMoreBtn);
