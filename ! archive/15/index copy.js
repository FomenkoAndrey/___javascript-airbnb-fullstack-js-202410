const moviesListElement = document.getElementById('movies-list')
const searchInput = document.getElementById('search')
const searchCheckbox = document.getElementById('checkbox')

let lastSearchQuery = null
let isSearchCheckboxChecked = false

const debounce = (() => {
  let timer = null

  return (cb, ms) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(cb, ms)
  }
})()

const addMoviesToList = ({ Poster: poster, Title: title, Year: year }) => {
  const item = document.createElement('div')
  const img = document.createElement('img')

  item.classList.add('movie')

  img.classList.add('movie__image')
  img.src = /^(https?:\/\/)/i.test(poster) ? poster : 'img/no-image.png'
  img.alt = `${title} (${year})`
  img.title = `${title} (${year})`

  item.append(img)
  moviesListElement.append(item)
}

const clearMoviesList = () => {
  if (moviesListElement) {
    moviesListElement.innerHTML = ''
  }
}

const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data || !data.Search) {
        throw new Error('The server returned incorrect data')
      }

      return data.Search
    })

const searchInputHandler = (e) => {
  debounce(() => {
    const searchQuery = e.target.value.trim()

    if (!searchQuery || searchQuery.length < 4 || searchQuery === lastSearchQuery) return
    if (!isSearchCheckboxChecked) {
      clearMoviesList()
    }

    lastSearchQuery = searchQuery

    getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${searchQuery}`)
      .then((data) => data.forEach(addMoviesToList))
      .catch((err) => console.log(err))
  }, 2000)
}

searchInput.addEventListener('input', searchInputHandler)
searchCheckbox.addEventListener('change', (e) => (isSearchCheckboxChecked = e.target.checked))
