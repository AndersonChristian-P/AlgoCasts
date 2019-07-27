// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Given an integer, return an integer that is the reverse ordering of numbers

function reverseInt(num) {
  const str = num.toString().split("").reverse().join("")

  const backToNum = Math.sign(num) * parseInt(str)

  return backToNum
}

console.log(reverseInt(-500))

module.exports = reverseInt;
