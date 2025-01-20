import Carousel from './carousel.js'

class SwipeCarousel extends Carousel {
  constructor(...args) {
    super(...args)
    this.slidesContainer = this.slideItems[0]?.parentElement
  }

  _swipeStart(e) {
    this.startPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
  }

  _swipeEnd(e) {
    this.endPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
    if (this.endPosX - this.startPosX > 100) this.prevHandler()
    if (this.endPosX - this.startPosX < -100) this.nextHandler()
  }

  _initListeners() {
    super._initListeners()
    this.slidesContainer.addEventListener('touchstart', this._swipeStart.bind(this), { passive: true })
    this.slidesContainer.addEventListener('mousedown', this._swipeStart.bind(this))
    this.slidesContainer.addEventListener('touchend', this._swipeEnd.bind(this))
    this.slidesContainer.addEventListener('mouseup', this._swipeEnd.bind(this))
  }
}

export default SwipeCarousel
