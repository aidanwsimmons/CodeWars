function camelize(str){
    return str.split('-').map((el, index) => {
      if(index>0){
        return el[0].toUpperCase() + el.slice(1)
      }
      return el
    }).join('')
}


// describe("camelize", function() {

//     it("leaves an empty line as is", function() {
//       assert.equal(camelize(""), "");
//     });
  
//     it("turns background-color into backgroundColor", function() {
//       assert.equal(camelize("background-color"), "backgroundColor");
//     });
  
//     it("turns list-style-image into listStyleImage", function() {
//       assert.equal(camelize("list-style-image"), "listStyleImage");
//     });
  
//     it("turns -webkit-transition into WebkitTransition", function() {
//       assert.equal(camelize("-webkit-transition"), "WebkitTransition");
//     });
  
//   });