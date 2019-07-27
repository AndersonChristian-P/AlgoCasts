// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  // create a helper function

  const aCharMap = buildCharMap(str1)
  const bCharMap = buildCharMap(str2)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }

  return true
}

function buildCharMap(str) {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, "".toLowerCase)) {
    if (!charMap[char]) {
      charMap[char] = 1
    } else {
      charMap[char]++
    }
  }
  return charMap

  // the regex above says anytime we find a character that isn't a number or a capital case or lower case letter replace it with nothing
}

console.log(anagrams("rat", "tart"))

module.exports = anagrams;
