// ! CRUD
// ? Create -> POST
// ? Read -> GET
// ? Update -> PUT / PATCH
// ? Delete -> DELETE

// ! DELETE
// async function deleteData(url) {
//   const response = await fetch(url, {
//     method: 'DELETE'
//   })

//   if (!response.ok) {
//     throw new Error(response.status)
//   }

//   return response.ok
// }

// deleteData('https://jsonplaceholder.typicode.com/posts/2')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ! PATCH
// async function patchData(url, data) {
//   const response = await fetch(url, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })

//   if (!response.ok) {
//     throw new Error(response.status)
//   }

//   return response.json()
// }

// patchData('https://jsonplaceholder.typicode.com/posts/2', {
//   title: 'foo123',
//   description: 'bar'
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ! PUT
// async function putData(url, data) {
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })

//   if (!response.ok) {
//     throw new Error(response.status)
//   }

//   return response.json()
// }

// putData('https://jsonplaceholder.typicode.com/posts/2', {
//   title: 'foo123',
//   body: 'bar',
//   email: 'test@test.com',
//   name: 'test',
//   userId: 1
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ! POST
// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })

//   if (!response.ok) {
//     throw new Error(response.status)
//   }

//   return response.json()
// }

// postData('https://jsonplaceholder.typicode.com/posts', {
//   title: 'foo123',
//   body: 'bar',
//   email: 'test@test.com',
//   name: 'test',
//   userId: 1
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ! GET
// async function getData(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   if (!response.ok) {
//     throw new Error(response.status)
//   }

//   return response.json()
// }

// getData('https://jsonplaceholder.typicode.com/posts/1')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
