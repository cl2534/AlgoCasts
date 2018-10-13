// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => character + reversed, '')
// }


const reverse = (str) => {
  return str.split('').reduce((accumulator , char) => char + accumulator, '')
}

module.exports = reverse;
