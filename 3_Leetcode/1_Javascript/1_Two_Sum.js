/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109

*/



// Loop through all elements and find the two adjuscent that add up to the target
const a = [10, 20, 30, 41, 50];
let current, previous, target = 50;
for(let i = 0; i < a.length; i++){
    if(i > 0){
        previous = parseInt(a[i - 1]);
        current = parseInt(a[i]);
            if(target === parseInt(current + previous)){
                console.log([i-1, i]);
                break
            }
    }
}



// Using a function with args
// Output below will be [ 4, 5 ]
function twoSum(numss, targetSum){
    for(let i = 0; i < numss.length; i++){
        if(i > 0){
            previous = parseInt(numss[i - 1]);
            current = parseInt(numss[i]);
                if(targetSum === parseInt(current + previous)){
                    return ([i-1, i]);
                }
        }
    }
    // Condition never met    
    return ("Target not found in array sum indexes twoSum");
}

console.log(twoSum([10, 20, 31, 45, 26, 56, 69, 72], 81));




var twoSuming = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){  
            if(nums[i] + nums[j] === target){
                return [i, j];  // Return the indices of the two numbers
            }
        }
    }
    return [];  // Return an empty array if no solution is found
};
let numsing = [2, 7, 11, 15];
let targeting = 9;

console.log("Function stored in variable: " + twoSuming(numsing, targeting)); // Output: [0, 1]








// Instead of itterating through the whole array, we can use a HashMap
var twoSumHashMap = (nums, target) => {    
    // Create a hash map (map) ==> This will store numbers as keys and their indices as values.
    const map = new Map();

    // Loop through the array (nums) ==> The loop runs from 0 to nums.length - 1, allowing us to check each number.
    for (let i = 0; i < nums.length; i++) {

        // Find the required complement ==> This is the number needed to reach target.
        // If nums[i] = 2 and target = 9, then complement = 9 - 2 = 7.
        let complement = target - nums[i];

        // Check if complement exists in map
        // If map already contains complement, then we have found the answer.
        // map.get(complement) gives the index of the complement.
        // i is the current index.
        // Return [map.get(complement), i], which is the pair of indices.
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices if complement is found
        }

        // Store the current number and index in map ==> If complement wasn't found, store nums[i] and its index for future lookup.
        map.set(nums[i], i); // Store current number and index
    }

    return []; // Return empty array if no valid pair is found
};

// Example Usage:
console.log(twoSumHashMap([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumHashMap([3, 2, 4], 6)); // Output: [1, 2]






// Find index of value 30
const index = a.indexOf(30);
// console.log(index);

// Value not found
const notFound = a.indexOf(60);
// console.log(notFound); 