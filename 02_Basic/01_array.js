// Array

// Ways to defind an array 

const myArray = [4, 5, 6, 7, "Hello"]
const myHero = ["Shaktiman","Naagraj"]
const myArray2 = new Array(1,2,3,5)

console.log(myArray);

// Array Methods

// myArray.push(6)                 // It is used to push any element in array
// myArray.pop()                   // It is used to pop or remove element from an array

// myArray.unshift(9)              // THis method is used to add element at the starting of array and shift other elements of array to right side. This method is not good when we have large number of data it will very time consuming
// myArray.shift()                 // This method is used to delete first element from the array and shift left other element from the array.

// console.log(myArray.includes(9));      // This method is used to check element is present in the array or not if yes then return true otherwise it will return False
// console.log(myArray.indexOf(9));       // This method is used to check index of given number in array if it present then it will return index number or it will return -1 if not present in array.

// const newArray = myArray.join()        // This method is used to convert your array into string.

// console.log(myArray);
// console.log(typeof newArray);

// Slice vs Splice 

console.log("A ",myArray);

const myn1 = myArray.slice(1,4)           // This method is used to slice an array from given index range it will not effect on original array. it's just make a copy of original array and remove element from it.
console.log(myn1);

console.log("B ",myArray);

const myn2 = nyArray.splice(1,3)         // This mehod is used to splice or break the array from given index range and remove it from array and make a new array. and it remove from starting point to end point and in between.
console.log("c ", myArray);
console.log(myn2);
