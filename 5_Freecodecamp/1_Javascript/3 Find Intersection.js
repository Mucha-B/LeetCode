/*

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted).
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.

Examples:
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10

*/


function FindIntersection(strArr){

    let firstArr = strArr[0];
    let secondArr = strArr[1];

    firstArr = firstArr.split(", ");
    secondArr = secondArr.split(", ");

    // Below is same as above
    // let firstArr = strArr[0].split(", ");
    // let secondArr = strArr[1].split(", ");

    // firstArr = firstArr.map(Number);
    // secondArr = secondArr.map(Number);


    let store = [];

    for(let i = 0; i < firstArr.length; i++){
        for(let j = 0; j < secondArr.length; j++){
            if(firstArr[i] == secondArr[j]){
                store.push(secondArr[j]);
            }
        }
    }

    return store;

}


// Not my solution
// Solution using includes()
// The .includes() method checks if an array or string contains a specific value and returns true or false.
function FindIntersectionUncludes(strArr) { 

    let newArr = [];
    let elem1 = strArr[0].split(', ');
    let elem2 = strArr[1].split(', ');
    
  
    // code goes here  
    for(let i = 0; i < elem1.length; i++ ) {
      if (elem2.includes(elem1[i])) {
        newArr.push(elem1[i]);
      }
    }

    return newArr.toString();
  
  }




//   Different application of foreach on array
function FindIntersectionForEach(strArr) { 


    let arrN1 = strArr[0].split(', ');
    let arrN2 = strArr[1].split(', ');
    let matchArr = [];

    arrN2.forEach(function(e, i) {
        if(arrN1.includes(e)){
            matchArr.push(e);
        }
    });

    // The .join() method is used to convert an array into a string, with elements separated by a specified delimiter.
    // The join below converts the numbers gotten into a string and uses a comma as a separator/delimiter
    return matchArr.length ? matchArr.join(',') : false;

    
    // [1, 2, 3, 4, 5]
    // console.log(numbers.join("-"));  // Output: "1-2-3-4-5"
    // console.log(numbers.join(", ")); // Output: "1, 2, 3, 4, 5"
    // console.log(numbers.join(""));   // Output: "12345" (no separator)
}
