"use strict";
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
  let res = [];
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
      res.push(array[i][j])
    }
  }
  return res.sort((a, b) => a - b)
}