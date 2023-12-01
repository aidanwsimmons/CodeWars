function longest(s1, s2) {
    let result = ''
    let arr1 = s1.split('')
    let arr2 = s2.split('')
    arr1.forEach(letter => {
      if(result.indexOf(letter) === -1){
        result += letter
      }
    })
    arr2.forEach(letter => {
      if(result.indexOf(letter) === -1){
        result += letter
      }
    })
    return result.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
  }
  
  // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
  
  // Examples:
  // a = "xyaabbbccccdefww"
  // b = "xxxxyyyyabklmopq"
  // longest(a, b) -> "abcdefklmopqwxy"
  
  // a = "abcdefghijklmnopqrstuvwxyz"
  // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"