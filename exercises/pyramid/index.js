// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const midpoint = Math.floor((2*n-1)/2)
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//     for (let column = 0; column < 2*n -1; column++) {
//       if (midpoint - row <= column & midpoint + row >= column) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }


function pyramid(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }
  if (stair.length === 2* n-1) {
    console.log(stair)
    return pyramid(n, row+1)
  }
  const midpoint = Math.floor((2*n-1)/2)
  let add;
  if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
    add = '#'
  } else {
    add = ' '
  }
  pyramid(n, row, stair+ add)
}
module.exports = pyramid;
