// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]


function pyramid(n) {
    let res = [];
    for(let i=0; i<n; i++){
      res.push([])
    }
    for(let i=0; i<res.length; i++){
      let num = i + 1;
      while(num > 0){
        res[i].push(1);
        num--
      }
    }
    return res
  }