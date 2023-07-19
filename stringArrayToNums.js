// Create the function that takes as a parameter 
// a sequence of numbers represented as strings and 
// outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.


function toNumberArray(stringarray){
    return stringarray.map(el => +el)
  }