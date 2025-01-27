// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

fizzBuzz = (num) => {
  for (let i = 0; i < num; i++) {
    if (i % 15 === 0) {
      console.log("Fizz Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else console.log(i)
  }
}

console.log(fizzBuzz(101))

module.exports = fizzBuzz;
