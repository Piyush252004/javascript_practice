// Primitive Datatype

// 7 types: String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 221215212154521254n    // if number is too large then after number putting n is used to convert it in big int

// Reference (Non Primitive)

// Array, Objects, Functions

const heros=["shaktiman","nagraj","doga"];  // Used to initialize an array

let myObj = { 
    name: "hitesh",         // initialize an object in javascript dictionary is known as javascript
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// Memory 

// stack (Primitive), Heap (Non-Primitive)

let Name = "Piyush"

let anothername= Name 
anothername = "Balwani"

console.log(Name);
console.log(anothername);

let userOne = {
    email: "name@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "piyushBalwani@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);       // non-primitive data types will store it in heap section or memory so that while assigning a value it will assign as an refference of that memory so that if we change any one of that it will apply to whole section of that space