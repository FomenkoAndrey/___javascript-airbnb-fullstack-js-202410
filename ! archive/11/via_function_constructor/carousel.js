function Carousel(containerId = '#carousel', slideId = '.item', interval = 5000) {
  this.container = document.querySelector(containerId)
  this.slides = this.container.querySelectorAll(slideId)

  this.TIMER_INTERVAL = interval
}

Carousel.prototype = {
  _initProps() {
    this.SLIDES_COUNT = this.slides.length
    this.CODE_ARROW_LEFT = 'ArrowLeft'
    this.CODE_ARROW_RIGHT = 'ArrowRight'
    this.CODE_SPACE = 'Space'
    this.FA_PAUSE = '<i class="fas fa-pause-circle"></i>'
    this.FA_PLAY = '<i class="fas fa-play-circle"></i>'
    this.FA_PREV = '<i class="fas fa-angle-left"></i>'
    this.FA_NEXT = '<i class="fas fa-angle-right"></i>'

    this.isPlaying = true
    this.timerId = null
    this.currentSlide = 0
    this.startPosX = null
    this.endPosX = null
  },

  _initIndicators() {
    const indicators = document.createElement('div')
    indicators.setAttribute('id', 'indicators-container')
    indicators.setAttribute('class', 'indicators')

    for (let i = 0; i < this.SLIDES_COUNT; i++) {
      const indicator = document.createElement('div')
      indicator.setAttribute('class', i ? 'indicator' : 'indicator active')
      indicator.dataset.slideTo = `${i}`
      indicators.append(indicator)
    }

    this.container.append(indicators)

    this.indicatorsContainer = this.container.querySelector('#indicators-container')
    this.indicatorItems = this.indicatorsContainer.querySelectorAll('.indicator')
  },

  _initControl() {
    const controls = document.createElement('div')
    const PAUSE = `
      <div id="pause-btn" class="control control-pause">
        ${this.FA_PAUSE}
      </div>
    `
    const PREV = `
      <div id="prev-btn" class="control control-prev">
        ${this.FA_PREV}
      </div>
    `
    const NEXT = `
      <div id="next-btn" class="control control-next">
        ${this.FA_NEXT}
      </div>
    `
    controls.setAttribute('id', 'controls-container')
    controls.setAttribute('class', 'controls')
    controls.innerHTML = PAUSE + PREV + NEXT
    this.container.append(controls)

    this.pauseBtn = this.container.querySelector('#pause-btn')
    this.prevBtn = this.container.querySelector('#prev-btn')
    this.nextBtn = this.container.querySelector('#next-btn')
  },

  _initListeners() {
    this.pauseBtn.addEventListener('click', this.pausePlayHandler.bind(this))
    this.prevBtn.addEventListener('click', this.prevHandler.bind(this))
    this.nextBtn.addEventListener('click', this.nextHandler.bind(this))
    this.indicatorsContainer.addEventListener('click', this._indicateHandler.bind(this))
    document.addEventListener('keydown', this.pressKeyHandler.bind(this))
  },

  _gotoNth(n) {
    this.slides[this.currentSlide].classList.toggle('active')
    this.indicatorItems[this.currentSlide].classList.toggle('active')
    this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT
    this.slides[this.currentSlide].classList.toggle('active')
    this.indicatorItems[this.currentSlide].classList.toggle('active')
  },

  _gotoPrev() {
    this._gotoNth(this.currentSlide - 1)
  },

  _gotoNext() {
    this._gotoNth(this.currentSlide + 1)
  },

  _tick() {
    this.timerId = setInterval(() => this._gotoNext(), this.TIMER_INTERVAL)
  },

  _indicateHandler(e) {
    const { target } = e // const target = e.target
    if (target.classList.contains('indicator')) {
      this.pauseHandler()
      this._gotoNth(+target.dataset.slideTo)
    }
  },

  pauseHandler() {
    if (!this.isPlaying) return
    clearInterval(this.timerId)
    this.pauseBtn.innerHTML = this.FA_PLAY
    this.isPlaying = false
  },

  playHandler() {
    this._tick()
    this.pauseBtn.innerHTML = this.FA_PAUSE
    this.isPlaying = true
  },

  pausePlayHandler() {
    this.isPlaying ? this.pauseHandler() : this.playHandler()
  },

  prevHandler() {
    this.pauseHandler()
    this._gotoPrev()
  },

  nextHandler() {
    this.pauseHandler()
    this._gotoNext()
  },

  pressKeyHandler(e) {
    const { code } = e // const code = e.code
    if (code === this.CODE_ARROW_LEFT) this.prevHandler()
    if (code === this.CODE_ARROW_RIGHT) this.nextHandler()
    if (code === this.CODE_SPACE) {
      e.preventDefault()
      this.pausePlayHandler()
    }
  },

  init() {
    this._initProps()
    this._initControl()
    this._initIndicators()
    this._initListeners()
    this._tick()
  }
}

Carousel.prototype.constructor = Carousel
