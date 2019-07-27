// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Given a string return the character that is most commonly used in the string

// Convert the string to an object where the keys of the object are the characters in the string and the values are the number of times that character has been found

function maxChar(str) {

  const charMap = {}
  let max = 0
  let maxChar = ""

  for (let char of str) {
    // for of loop is used to iterate through a string or object
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      charMap[char]++
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

console.log(maxChar("Hello There!"))

module.exports = maxChar;
