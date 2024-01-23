// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array){
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let uppercase = letters.toUpperCase()
    let index = 0;
    
    if(array[0] === array[0].toUpperCase()){
      index = uppercase.indexOf(array[0])
      
      for(let i = 0; i < array.length; i++){
        if(array[i] !== uppercase[index]){
          return uppercase[index]
        } else {
          index++
        }
      
    }
    } 
    
    
    else {
      index = letters.indexOf(array[0])
      
      for(let i = 0; i < array.length; i++){
        if(array[i] !== letters[index]){
          return letters[index]
        } else {
          index++
        }
    }
    }
}
    