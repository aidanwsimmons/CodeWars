
// You are going to be given an array of integers. 
// Your job is to take that array and find an index N 
// where the sum of the integers to the left of N is
// equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.


function findEvenIndex(arr)
{
  for(let i = 0; i<arr.length; i++){
    if((arr.slice(0, i).reduce((a, c) => a + c, 0)) === (arr.slice(i+1).reduce((a, c) => a + c, 0))){
      return i
    }
  }
  
  return -1;
}
 


// Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
// Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
// Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
// Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n"); 