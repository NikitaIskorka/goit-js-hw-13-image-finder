import './sass/main.scss';
import './js/sticky-search'
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';
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
const loadMoreBtn = new Btn({ selector: "#button",hidden:'true'})

// ОБРАБОТЧИК ВВОДА ЗАПРОСА
refs.searchForm.addEventListener('submit',onChangeSearchForm)
refs.galleryContainer.addEventListener('click',lightBoxOnClick)


function lightBoxOnClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return
    }
    console.log(e.target);
    basicLightbox.create(`
		<img width="1400" height="900" src='${e.target.dataset.url}'>
    `).show()
  

}

// ПОИСК ПО ВВОДУ В ИПУТ
function onChangeSearchForm(e) {
    e.preventDefault()
    loadMoreBtn.show()
    clearGalleryContainer()
    pixbyApiService.query = e.currentTarget.elements.query.value
    pixbyApiService.resetPage()
    pixbyApiService.fetchPicturesByName().then(insertPictureCardMarkup)
};




window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(onLoadMoreClick,500);

	}
});

// window.addEventListener("scroll", () => {
//   // Scrolled to bottom
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//    onLoadMoreClick();
//   }
// });
// // ОБРАБОТЧИК КЛИКА ПО КНОПКЕ LOAD MORE...
// loadMoreBtn.refs.button.addEventListener('click',onLoadMoreClick)


// ЗАГРУЗКА ДОПОЛНИТЕЛЬНЫХ ИЗОБРАЖЕНИЙ ПО КЛИКУ
function onLoadMoreClick() {
    pixbyApiService.fetchPicturesByName().then(insertPictureCardMarkup)}
function insertPictureCardMarkup(pictures) {
    const markup = pictureCard(pictures)
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup)
    //   window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
}
function clearGalleryContainer() {
    refs.galleryContainer.innerHTML=''
}






