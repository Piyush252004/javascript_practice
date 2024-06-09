// let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// 33 => 33
// "33abc" => nAN  (not a number)
// true => 1; false => 0

let isLoggedIn=1

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Piyush" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// 33 => convert it in string


let value = 3
let negValue = -value
console.log(negValue);

let str1= "Piyush";
let str2="Balwani";

let str3= str1 + str2 
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");   // It will run as an first element type. It convets other elements as an type of first element.

console.log(+true);
console.log(+"");
