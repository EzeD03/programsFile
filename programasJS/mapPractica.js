arr = [ 1, 4, 3, 56, 32,23]

const numMap = arr.map((num) => (num === 1 ? num + 3 : num % 2 === 1 ? num -1 : num))

console.log(numMap);