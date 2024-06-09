const name = "Piyush"
const repoCount = 5

//console.log (name + repoCount + " Value");   // THis format is not recommended for writing string in code 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Piyush.Ba.I')

// console.log(gameName[0]);                //This print character which is at 0th position 
// console.log(gameName.__proto__);         //This is a background syntex of compiler which run when we call any method or function in string automatically

// console.log(gameName.length);            //This is used to find the length of string
// console.log(gameName.toUpperCase());     //This is used to convert string into Uppercase letters
console.log(gameName.charAt(2));            //This is used to find character at given index
console.log(gameName.indexOf('t'));         //This is used to find index of given character

const newString = gameName.substring(0,4)   //It is used to print substring of our string. we can print it by given index value range. we can not give it negative index value because if we give it it will ignore it and consider it as an 0th index.
console.log(newString);

const anothereString = gameName.slice(-8,4) //It is used to slice our string from given index positions. we can slice our string from reverse order also for that we have to give index value in negative fromat.
console.log(anothereString);

const newStringOne = " Piyush   "
console.log(newStringOne);
console.log(newStringOne.trim());           //It is used to trim or cut space from right and left side in our string.

const url = "https://piyush.com/piyush%20balwani"

console.log(url.replace('%20','-'));        //It is used to replace values or character from our string to given value or character.

console.log(url.includes('Krish'))          //It is used to ask question to url is that word present in our string or not. it return true or false according to checking

console.log(gameName.split('.'));           //It is used to split string by given format.