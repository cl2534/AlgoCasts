// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// palindrome('abccba')
// function palindrome(str) {
//   return str.split('').every((char, i) => char === str[str.length - i - 1])
// }

const palindrome = (str) => {
  return str.split('').every((char, i) => char === str[str.length - 1 - i])
}

const palindrome = (str) => {
  return str === str.split('').reverse().join('')
}

// const reversed = str.split('').reverse().join('')
// return reversed === str

module.exports = palindrome;
