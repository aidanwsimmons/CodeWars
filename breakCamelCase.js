// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let res = []
    let wordStart = 0;
    for(let i=0; i<string.length; i++){
      if(string[i] === string[i].toUpperCase()){
        res.push(string.slice(wordStart, i))
        wordStart = i
      }
      if(i === string.length-1){
        res.push(string.slice(wordStart))
      }
    }
    return res.join(' ')
      
  }