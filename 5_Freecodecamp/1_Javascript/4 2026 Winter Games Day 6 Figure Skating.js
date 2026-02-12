/*

    Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.
    The first argument is an array of 10 judge scores, each a number from 0 to 10.
    Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.
    Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.

    Example:
    1. computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1) should return 64.
    2. computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) should return 80.
    3. computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1) should return 67.
    4. computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0) should return 67.5.
    5. computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5) should return 59.

*/

/*
    Pseudo
    1. Look for smallest value in array and remove
    2. Look for largest value in array and remove
    3. Sum all values in array to get total
    4. Start subtracting all the extra args that came when the function was called, if any

*/

function computeScore(judgeScores, ...penalties) {

    // var judgeScores = judgeScores;
    // var largeNum = 0, smallNum = 0;
    // console.log(judgeScores.length);
    for(let i = 0; i < judgeScores.length; i++){
        console.log(judgeScores[i]);
    }

//   return judgeScores;
}


computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1);

// console.log(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1));