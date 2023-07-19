//Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let arr = [];
  let num = n.toString();
  for(let i=num.length-1; i>=0; i--){
    arr.push(Number(num[i]))
  }
  return arr;
}