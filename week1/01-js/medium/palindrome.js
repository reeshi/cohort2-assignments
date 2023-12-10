/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i=0;
  let j=str.length-1;
  const lowercaseStr = str.toLowerCase();
  while(i < j){
    while (!(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 122)){
      i++;
    }
    while (!(str.charCodeAt(j) >= 65 && str.charCodeAt(j) <= 122)) {
      j--;
    }
    if (lowercaseStr[i] !== lowercaseStr[j]){
      return false;
    }
    i++;
    j--;
  } 
  return true;
}

module.exports = isPalindrome;
