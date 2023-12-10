/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const map = {};
  // converting the strings into lowercase to handle the casing testcases also.
  const str1LowerCase = str1.toLowerCase();
  const str2LowerCase = str2.toLowerCase();

  for (const char of str1LowerCase){
    if(char in map){
      map[char] += 1;
    }else{
      map[char] = 1;
    }
  }

  for (const char of str2LowerCase){
    if(char in map){
      map[char] -= 1;
      if(map[char] === 0){
        // if char freq is zero then we delete that entry
        delete map[char]
      }
    }else{
      return false;
    }
  }
  
  // after all the operation if there is some entries left in map than the strings is not anagram of each other.
  if(Object.keys(map).length){
    return false;
  }
  return true;
}

module.exports = isAnagram;
