# FreeCodeCamp JavaScript-Algorithms-and-Data-Structures

#### Description: Projects
1. Palindrome Checker
Write a function that takes in a string and returns a boolean indicating whether the string is a palindrome (i.e., reads the same forwards and backwards). The function should ignore spaces, punctuation, and capitalization.

Examples
Input:


palindromeChecker("A man, a plan, a canal, Panama!")
Output:


true
Input:


palindromeChecker("race a car")
Output:


false
Solution
Use a regular expression to remove all non-alphanumeric characters from the string.
Convert the resulting string to all lowercase letters.
Reverse the string and compare it to the original. If they are the same, return true. Otherwise, return false.
Code

function palindromeChecker(str) {
  // remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // reverse string and compare to original
  return str === str.split('').reverse().join('');
}
