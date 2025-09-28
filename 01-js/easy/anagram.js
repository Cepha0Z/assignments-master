/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let temp = false;
  if (str1.length != str2.length) {
    return false;
  }
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) temp = true;
    }
    if (temp == false) {
      return false;
    }
    temp = false;
  }
  return true;
}

module.exports = isAnagram;
