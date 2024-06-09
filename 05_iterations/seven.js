const myNums = [1,2,3,4,5]

// const newNums = myNums.map((num) => num + 10)       // Map is also used as same as filter it used to iterate over all elements of an array.



// Chaining

const newNums = myNums.map((num) => num * 10).map((num) => num + 1)         // We can use map and all other function / method as an chain so that we can add multiple function as an chain and we can apply multiple properties on it in sequence. we can make as many number of chaining functions.

console.log(newNums);