/* eslint-disable prefer-rest-params */
/* eslint-disable no-undef */
function SwipeCarousel() {
  Carousel.apply(this, arguments)
}

SwipeCarousel.prototype = Object.create(Carousel.prototype)
SwipeCarousel.prototype.constructor = SwipeCarousel

SwipeCarousel.prototype._swipeStartHandler = function (e) {
  this.startPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
}

SwipeCarousel.prototype._swipeEndHandler = function (e) {
  this.endPosX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
  if (this.endPosX - this.startPosX > 100) this.prevHandler()
  if (this.endPosX - this.startPosX < -100) this.nextHandler()
}

SwipeCarousel.prototype._initListeners = function () {
  Carousel.prototype._initListeners.apply(this)
  this.container.addEventListener('touchstart', this._swipeStartHandler.bind(this), { passive: true })
  this.container.addEventListener('mousedown', this._swipeStartHandler.bind(this))
  this.container.addEventListener('touchend', this._swipeEndHandler.bind(this))
  this.container.addEventListener('mouseup', this._swipeEndHandler.bind(this))
}

console.dir(SwipeCarousel)
