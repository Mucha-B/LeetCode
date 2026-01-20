/*
Codeland Username Validation
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

  1. The username is between 4 and 25 characters.
  2. It must start with a letter.
  3. It can only contain letters, numbers, and the underscore character.
  4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.

Examples:
  Input: "aa_"
  Output: false

  Input: "u__hello_world123"
  Output: true
*/


/* 
    /^[A-Za-z]+$/
    Ensures only alphabetic characters (A-Z and a-z) are present in the entire string.
    No numbers, spaces, or special characters are allowed.
    The whole string must match (^ and $ ensure this).
*/
// /.../	Delimiters that define a regular expression in JavaScript.
// ^	Start of the string anchor. Ensures the match begins at the start.
// [A-Za-z]	Character class matching any uppercase (A-Z) or lowercase (a-z) letter.
// +	One or more occurrences of the preceding character class ([A-Za-z]).
// $	End of the string anchor. Ensures the match extends to the last character.


function CodelandUsernameValidation(str) { 

  let output;
  // /.../    ==>	Delimiters that define a regular expression in JavaScript.
  // ^        ==>	Start of the string anchor. Ensures the match begins at the start.
  // [A-Za-z] ==>	Character class matching any uppercase (A-Z) or lowercase (a-z) letter.
  // +        ==>	One or more occurrences of the preceding character class ([A-Za-z]).
  // $        ==>	End of the string anchor. Ensures the match extends to the last character.
  if((str.length >= 4 && str.length <= 25) && (/^[A-Za-z]+$/.test(str[0])) && (!str.endsWith("_"))){

      // /.../          ==> Delimiters that define a regular expression in JavaScript.
      // ^              ==> Start of the string anchor. Ensures the match begins at the start.
      // [A-Za-z0-9_]   ==> Character class allowing letters (A-Z, a-z), numbers (0-9), and underscores (_) only.
      // +              ==> One or more occurrences of the preceding character class.
      // $              ==> End of the string anchor. Ensures the match extends to the last character.
      /*
      This regular expression (/^[A-Za-z0-9_]+$/) is used to check if a string only contains:
      ✔ Uppercase letters (A-Z)
      ✔ Lowercase letters (a-z)
      ✔ Digits (0-9)
      ✔ Underscore (_)
      */
      if(/^[A-Za-z0-9_]+$/.test(str)){
        output = true;
      }else{
        output = false;
      }

  }else{
    output = false;
  }
  return output; 

}

console.log(CodelandUsernameValidation("aaa24353a"));
console.log(CodelandUsernameValidation("aaa243**53a"));
console.log(CodelandUsernameValidation("_aaa24353a"));