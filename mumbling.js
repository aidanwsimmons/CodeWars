function accum(s) {
	// your code
  let result = "";
  for(let i = 0; i < s.length; i++){
    result += s[i].toUpperCase();
    let j = i;
    while(j>0){
      result += s[i].toLowerCase()
      j--
    }
    if(i<s.length -1){
      result += '-'
    }
  }
  return result
}


// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"




//REFACTOR
function accum2(s){
    return s.split('').map((c,i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}