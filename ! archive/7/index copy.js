/* eslint-disable guard-for-in */
/* eslint-disable no-shadow */

const arr = []

for (let i = 0; i < 10000; i++) arr[i] = 0

function walkForIn(arr) {
  for (const key in arr) arr[key]++
}

function walkFor(arr) {
  for (let i = 0; i < arr.length; i++) arr[i]++
}

function bench(f) {
  const date = performance.now()
  for (let i = 0; i < 10000; i++) f(arr)
  return performance.now() - date
}

console.time('testForIn')

const resForIn = bench(walkForIn)
const resFor = bench(walkFor)

console.timeEnd('testForIn')

console.log(`Время walkForIn ${resForIn} мс`)
console.log(`Время walkFor: ${resFor} мс`)

console.log(`for..in медленее for в ${Math.round(resForIn / resFor)} раз`)
