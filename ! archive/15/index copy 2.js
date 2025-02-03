/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
const { of, fromEvent, tap, map, filter, debounceTime, distinctUntilChanged, switchMap, from, catchError } = rxjs

const moviesListElement = document.getElementById('movies-list')
const searchInput = document.getElementById('search')
const searchCheckbox = document.getElementById('checkbox')

const fetchData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data || !data.Search) {
        throw new Error('The server returned incorrect data')
      }

      return data.Search
    })

const getMovies = (searchQuery) =>
  from(fetchData(`http://www.omdbapi.com/?apikey=18b8609f&s=${searchQuery}`)).pipe(
    catchError((err) => {
      console.error(err)
      return of([])
    })
  )

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

const searchMovieStream$ = fromEvent(searchInput, 'input').pipe(
  map((e) => e.target.value.trim()),
  filter((value) => value.length > 3),
  debounceTime(1000),
  distinctUntilChanged(),
  tap(() => !searchCheckbox.checked && (moviesListElement.innerHTML = '')),
  tap((searchQuery) => console.log(searchQuery)),
  switchMap((searchQuery) => getMovies(searchQuery)),
  tap((movies) => movies.forEach(addMoviesToList))
)

searchMovieStream$.subscribe()
