/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
    // Your code 
    let count = 0;
    for(const char of str) {
      if(char === 'a' || char === 'A'){
        count += 1;
      }else if (char === 'e' || char === 'E'){
        count += 1;
      }else if (char === 'i' || char === 'I'){
        count += 1;
      } else if (char === 'o' || char === 'O') {
        count += 1;
      } else if (char === 'u' || char === 'U') {
        count += 1;
      }
    }
    return count;
}

module.exports = countVowels;