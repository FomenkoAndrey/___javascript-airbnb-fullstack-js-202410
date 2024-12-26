for (var i = 0; i < 10; i++) {
  setTimeout(
    function (index) {
      console.log(index)
    }.bind(null, i),
    i * 100
  )
}
