export default class PixbyApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1
    }
  fetchPicturesByName() {
    
    console.log(this);
    const APIKEY = '21676003-838a5328a33fa763d4846129b'
    const BASEURL = 'https://pixabay.com/api/'
    const url = BASEURL + '?image_type=photo&orientation=horizontal&q=' + this.searchQuery + '&page='+this.page+'&per_page=12&key=' + APIKEY

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.page += 1
     return data.hits
      })
    }
  get query() {
  return this.searchQuery
  }
  set query(newQuery) {
    this.searchQuery=newQuery
  }
  resetPage() {
    this.page = 1
  }
}


