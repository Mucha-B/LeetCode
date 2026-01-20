    /*
    Task
      You will be given an array of numbers.
      You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
   
   Examples
      [7, 1]  =>  [1, 7]
      [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    */ 

      function sortArray(array) {
         let myArr = [];
         let position = 0;
         
         for(let i = 0; i < array.length; i++){
           if(array[i] % 2 == 0 || array[i] == 0){
             continue;
           }else if(array[i] % 2 != 0){
             myArr.push(array[i]);
             array[i] = 'replace';
             }
           }

        //  Sorting function to sort them in ascending
         myArr.sort(function(a, b){return a - b});

         for(let j = 0; j < array.length; j++){
             if(array[j] == 'replace'){
               array[j] = myArr[position];
               position ++;
           }
         }
         return array;
       }


      //  Second solution
      // Instead of using replace, we can leave the odd numbers in and just replace odd number instead of checking for replace
      // Instead of creating a variable position, we can use the .shift() to remove the first array position in that instance and place it in the odd position we are current in
       function sortArrayShift(array) {
         var odds = [];
         //loop, if it's odd, push to odds array
         for (var i = 0; i < array.length; ++i) {
           if (array[i]%2 !== 0) {
             odds.push(array[i]);
           }
         }
         //sort odds from smallest to largest
         odds.sort(function(a, b){
           return a - b;
         });
         
         //loop through array, replace any odd values with sorted odd values
         for (var j = 0; j < array.length; ++j) {
           if (array[j]%2 !== 0) {
             array[j] = odds.shift();
           }
         }
         
        return array;
       }

// sortArray([5, 3, 2, 8, 1, 4])
console.log(sortArray([5, 3, 2, 8, 1, 4]));


// Sofisticated answer
// Not my solution
// array.filter((x) => x % 2) → Extracts only odd numbers from the array.
// .sort((a, b) => a - b) → Sorts those odd numbers in ascending order.
// If x is odd, replace it with the smallest remaining odd number from odd.shift().
// If x is even, keep it unchanged.
function sortArrayMap(array) {
   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
   return array.map((x) => x % 2 ? odd.shift() : x);
 }

//  Another Elegant solution
sortArray = (a,b=a.filter(a=>a%2).sort((a,b)=>a-b))=>a.map(a=>a%2?b.shift():a);



// Understanding shift
 let arrXP = [125, 345, 223, 94, 176, 409];
 let testArr = [];
 let k = 0;

 let experiment = arrXP.shift();    // 125 stored
     experiment = arrXP.shift();    // 125 lost and 345 stored

 console.log(experiment);
 console.log(arrXP);

while(k < arrXP.length){
  testArr.push(arrXP.shift()); 
 }

 console.log(testArr);