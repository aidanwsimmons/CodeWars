// Complete the solution so that it returns true if the first 
// argument(string) passed in ends with the 2nd argument (also a string).


function solution(str, ending){
    if(str.slice(-(ending.length)) ===  ending){
      return true
    }
    else if(ending === ''){
      return true
    }
    return false
  }


//   Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)