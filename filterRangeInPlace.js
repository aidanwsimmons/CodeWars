function filterRangeInPlace(arr, a, b) {
    for(let i=0; i<=arr.length; i++){
      if(arr[i] < a || arr[i] > b){
        arr.splice(i, 1);
        i--
      }
    }
  }

//   describe("filterRangeInPlace", function() {

//     it("returns the filtered values", function() {
  
//       let arr = [5, 3, 8, 1];
  
//       filterRangeInPlace(arr, 2, 5); 
  
//       assert.deepEqual(arr, [5, 3]);
//     });
  
//     it("doesn't return anything", function() {
//       assert.isUndefined(filterRangeInPlace([1,2,3], 1, 4)); 
//     });
  
//   });