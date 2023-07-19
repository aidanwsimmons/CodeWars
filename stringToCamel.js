// Complete the method/function so that it 
// converts dash/underscore delimited words 
// into camel casing. The first word within 
// the output should be capitalized only if 
// the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case). 
// The next words should be always capitalized.

function toCamelCase(str){
    str = str.replaceAll('_', '-');
    let arr = str.split('-');
    let camel = arr.map((el, i) => {
      if(i>0){
        return el[0].toUpperCase() + el.slice(1)
      }
      return el
    })
    return camel.join('');
  }