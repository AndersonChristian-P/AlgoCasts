// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Determine if a string of characters is a palindrome

isPalindrome = (str) => {
  reverseStr = str.toLowerCase().split("").reverse().join("")

  if (str === reverseStr) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome("trart"))

module.exports = palindrome;
