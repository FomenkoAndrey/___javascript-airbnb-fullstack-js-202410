const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.Search)

getData('http://www.omdbapi.com/?apikey=18b8609f&s=batman')
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
