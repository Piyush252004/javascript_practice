const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);     // It is used to convert nummber into string and then find the length of numbers
console.log(balance.toFixed(2));            // It is used to give the fixed decimal numbers of given number. It add decimal numbers after actual number like in this example 100.00 will be added

const otherNumber = 112.8977
console.log(otherNumber.toPrecision(3));    // It is used to give precise(roundoff) value in the form of given number

const hundreds = 100000
console.log(hundreds.toLocaleString());    // It is used to format zeros in a good format and separat it according to US currency format
console.log(hundreds.toLocaleString("en-IN")); //It is used to format zeros in indian currency format

// ************************Maths***************************

console.log(Math);                          // Math is an object
console.log(Math.abs(-4));                  // abs() This method is used to convret any number to its absolute number. It converts negative numbers into positive numbers.
console.log(Math.round(4.3));               // It is used to roundoff number in decimal format
console.log(Math.ceil(6.2));                // It is used to take top value of the float numbers
console.log(Math.floor(4.9));               // It is used to take floor value of givem float value
console.log(Math.min(4,6,3,7));             // It is used to find minimum number from the given list or array
console.log(Math.max(4,5,8,9));             // It is used to find maximum number from the given list or array

console.log(Math.random());                 // IT will give us random numbers. Values will be inbetween 0 and 1 only
console.log(Math.random()*10);              // It will multiply the random number with 10 so that decimal point will move to right of that number

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min +1)) + min);      // It is used to find the random integer number from the given minimum and maximum value range. Floor() method is used to convert decimal numbers into integers
