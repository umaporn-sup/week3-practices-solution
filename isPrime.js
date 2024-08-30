// Write a function isPrime(num) that returns true if num is a prime number, and false otherwise.
function isPrime(num) {
  if (num <= 1) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

console.log(isPrime(2)) // true
console.log(isPrime(4)) // false
console.log(isPrime(17)) // true
