// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//
// function chunk(array, size) {
//   let chunk = []
//   for (let element of array) {
//     let lastEle = chunk[chunk.length-1];
//     if (!lastEle || lastEle.length === size) {
//       chunk.push([element])
//     } else {
//       lastEle.push(element)
//     }
//   }
// return chunk
// }

function chunk(array, size) {
  const chunked = []
  let index = 0
  while (index < array.length) {
    chunked.push(array.slice(index, index+size))
    // index would be the start point & can be where it is left over from first loop
    // if the array is [1,2,3,4,5] and array.slice(3,6+) will always return index 3 to the end.
    index += size
  }
  return chunked
}

module.exports = chunk;
