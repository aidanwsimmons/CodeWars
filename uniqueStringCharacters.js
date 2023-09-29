// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 

function solve(a,b){
    let result = '';
     for(let i=0; i<a.length; i++){
       if(b.indexOf(a[i]) === -1){
         result += a[i]
       }
     }
     for(let i=0; i<b.length; i++){
       if(a.indexOf(b[i]) === -1){
         result += b[i]
       }
     }
     return result;
   };