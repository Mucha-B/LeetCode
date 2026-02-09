/*

Summary
Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.

Islands
An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0).
Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.

Below you can see an example with 2 islands:

on the left in the form of a matrix of 1's and 0's
on the right in an equivalent stringified form using "X" and "~" characters for better readability
[
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
  [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
]
Specification
Your task is to implement a function which accepts a matrix containing the numbers 0 and 1. It should return the number of islands as an integer.



*/

/*

=== Sample Test ===
const Test = require('@codewars/test-compat');

describe('simple cases', function(){

  it('should return zero when there are no islands', function(){
    var image = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ];
    let stringified = dump(image);
    Test.assertEquals(countIslands(image), 0, `Failed for\n\n${stringified}\n\n`);
  });

  it('should find single island', function(){
    var image = [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0],
    ];
    let stringified = dump(image);
    Test.assertEquals(countIslands(image), 1, `Failed for\n\n${stringified}\n\n`);
  });

  it('should handle example case', function(){
    var image = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,1,1,0,0,0,0,0,0],
      [0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,0],
      [0,0,0,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];
    let stringified = dump(image);
    Test.assertEquals(countIslands(image), 2, `Failed for\n\n${stringified}\n\n`);
  });
  
  
});

*/



// function countIslands(image){
//   // implementation
// }

function countIslands(image){
  let result = 0;
  const directions = [[0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]];

  const checkAround = (i, j) => {
    if (image[i] && image[i][j]) image[i][j] = 0; else return;
    directions.forEach((dir) => {
      checkAround(i + dir[0], j + dir[1]);
    })
  };
  
  image.forEach((row, i) => {
     row.forEach((el, j) => {
       if (el) {
         result++;
         checkAround(i, j);
       }
     });
  });
  
  return result;
}

var image = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,1,1,0,0,0,0,0,0],
      [0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,0],
      [0,0,0,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ];


  console.log(countIslands(image));