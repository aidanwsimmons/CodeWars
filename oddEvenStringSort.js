// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'


function sortMyString(S) {
    let odds = ''
    let evens = ''
    for(let i=0; i<S.length; i++){
      if(i%2 === 0){
        evens += S[i]
      }
      else{
        odds += S[i]
      }
    }
   return evens + ' ' + odds
 }