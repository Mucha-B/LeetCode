/*
Bracket Combinations
Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. 
For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). 
There are 5 total combinations when the input is 3, so your program should return 5.


Examples
Input: 3
Output: 5

Input: 2
Output: 2
*/


// Not my solutions
// Step for permutations and combinations
function BracketCombinations(num) {
    // By Doing sum search i found a formula that can achieve what this problem want
    // called Catalan number (Catalan Formula)
    // where catalan formula is ==> (2n!) / (n+1)! n!
  
    // first i will calculate the factorial of the num
    let factorial = (n) => {
    // let factorial = function (n) {       // Both functions work the same
    
      let k = 1;
      for(var i = n; i >= 1; i--){
        k *= i;
      }
      return k;

    }
    
    // formula going down
    const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
    return result; 
  }
     
  // keep this function call here 
  console.log(BracketCombinations(3));
  console.log(BracketCombinations(8));




  // Solution Two
  function TwoBracketCombinations(num) {

    function calculatePOssibilities (open, closed) {
        if (open === 0 && closed === 0){
            return 1;
        }

        var res = 0;
        
        if (open > 0){
            res += calculatePOssibilities(open - 1, closed);
          }
        if (closed > open){
            res += calculatePOssibilities(open, closed - 1);
          }

        return res;
    }
    // code goes here  
    return calculatePOssibilities(num, num);
}



console.log(TwoBracketCombinations(8));