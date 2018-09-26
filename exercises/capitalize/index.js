// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split(' ')
  let resultArr = []
  for (let str of strArr) {
    str = str.charAt(0).toUpperCase()
    resultArr.push(str)
  }
  return resultArr.join(' ')
}

module.exports = capitalize;
