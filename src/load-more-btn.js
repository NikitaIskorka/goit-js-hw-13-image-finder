



export default class LoadmoreBtn{
    constructor({selector,hidden =false}) {
        this.refs=this.getRefs(selector)
        hidden && this.hide()
    }
    getRefs(selector) {
        const refs = {}
        refs.button = document.querySelector(selector)
        refs.lable = refs.button.querySelector('.lable')
        refs.spinner = refs.button.querySelector('.spinner')
        return refs
    }
    enable() {
        this.refs.button.disable = false
        this.refs.textContent = 'Show more'
        this.refs.spinner.classList.add('is-hidden')
    }
    disable() {
         this.refs.button.disable = true
        this.refs.textContent = 'Loading...'
        this.refs.spinner.classList.remove('is-hidden')
    }
    show() {
        this.refs.button.classList.remove('is-hidden')
    }
    hide() {
        this.refs.button.classList.add('is-hidden')
    }

}
