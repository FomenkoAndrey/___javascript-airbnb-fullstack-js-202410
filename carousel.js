/* eslint-disable object-curly-newline */
class Carousel {
  constructor(p) {
    const settings = { ...{ containerId: '#carousel', slideId: '.slide', interval: 5000, isPlaying: true }, ...p }

    this.container = document.querySelector(settings.containerId)
    this.slideItems = this.container.querySelectorAll(settings.slideId)

    this.TIMER_INTERVAL = settings.interval
    this.isPlaying = settings.isPlaying
  }

  _initProps() {
    this.slideItems_COUNT = this.slideItems.length
    this.CODE_ARROW_LEFT = 'ArrowLeft'
    this.CODE_ARROW_RIGHT = 'ArrowRight'
    this.CODE_SPACE = 'Space'
    this.FA_PAUSE = '<i class="fas fa-pause-circle"></i>'
    this.FA_PLAY = '<i class="fas fa-play-circle"></i>'
    this.FA_PREV = '<i class="fas fa-angle-left"></i>'
    this.FA_NEXT = '<i class="fas fa-angle-right"></i>'

    this.timerId = null
    this.currentSlide = 0
    this.startPosX = null
    this.endPosX = null
  }

  _initIndicators() {
    const indicators = document.createElement('div')
    indicators.setAttribute('id', 'indicators-container')
    indicators.setAttribute('class', 'indicators')

    for (let i = 0; i < this.slideItems_COUNT; i++) {
      const indicator = document.createElement('div')
      indicator.setAttribute('class', i ? 'indicator' : 'indicator active')
      indicator.dataset.slideTo = `${i}`
      indicators.append(indicator)
    }

    this.container.append(indicators)

    this.indicatorsContainer = this.container.querySelector('#indicators-container')
    this.indicatorItems = this.indicatorsContainer.querySelectorAll('.indicator')
  }

  _initControl() {
    const controls = document.createElement('div')
    const PAUSE = `
      <div id="pause-btn" class="control control-pause">
        ${this.isPlaying ? this.FA_PAUSE : this.FA_PLAY}
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
  }

  _initListeners() {
    this.pauseBtn.addEventListener('click', this.pausePlay.bind(this))
    this.prevBtn.addEventListener('click', this.prev.bind(this))
    this.nextBtn.addEventListener('click', this.next.bind(this))
    this.indicatorsContainer.addEventListener('click', this._indicate.bind(this))
    document.addEventListener('keydown', this.pressKey.bind(this))
  }

  _gotoNth(n) {
    this.slideItems[this.currentSlide].classList.toggle('active')
    this.indicatorItems[this.currentSlide].classList.toggle('active')
    this.currentSlide = (n + this.slideItems_COUNT) % this.slideItems_COUNT
    this.slideItems[this.currentSlide].classList.toggle('active')
    this.indicatorItems[this.currentSlide].classList.toggle('active')
  }

  _gotoPrev() {
    this._gotoNth(this.currentSlide - 1)
  }

  _gotoNext() {
    this._gotoNth(this.currentSlide + 1)
  }

  _tick() {
    if (!this.isPlaying) return
    if (this.timerId) return
    this.timerId = setInterval(() => this._gotoNext(), this.TIMER_INTERVAL)
  }

  _indicate(e) {
    const { target } = e // const target = e.target
    if (target.classList.contains('indicator')) {
      this.pause()
      this._gotoNth(+target.dataset.slideTo)
    }
  }

  pause() {
    if (!this.isPlaying) return
    this.pauseBtn.innerHTML = this.FA_PLAY
    this.isPlaying = false
    clearInterval(this.timerId)
    this.timerId = null
  }

  play() {
    if (this.isPlaying) return
    this.pauseBtn.innerHTML = this.FA_PAUSE
    this.isPlaying = true
    this._tick()
  }

  pausePlay() {
    this.isPlaying ? this.pause() : this.play()
  }

  prev() {
    this.pause()
    this._gotoPrev()
  }

  next() {
    this.pause()
    this._gotoNext()
  }

  pressKey(e) {
    const { code } = e // const code = e.code
    if (code === this.CODE_ARROW_LEFT) this.prev()
    if (code === this.CODE_ARROW_RIGHT) this.next()
    if (code === this.CODE_SPACE) {
      e.preventDefault()
      this.pausePlay()
    }
  }

  init() {
    this._initProps()
    this._initControl()
    this._initIndicators()
    this._initListeners()
    this._tick()
  }
}

export default Carousel
