// Write a function countVowels(str) that returns the number of vowels in a given string.
function countVowels(str) {
  // const vowels = 'aeiouAEIOU'
  // let count = 0
  // for (let char of str) {
  //   if (vowels.includes(char)) {
  //     count++
  //   }
  // }
  // return count
  const vowels = str.match(/[aeiou]/gi)
  console.log(vowels)
  return vowels?.length ?? 0
}

console.log(countVowels('hEllo')) // 2
console.log(countVowels('world')) // 1
console.log(countVowels('')) // 0
