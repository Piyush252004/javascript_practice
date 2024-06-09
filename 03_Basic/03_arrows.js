const user = {
    username: "Piyush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);            // this . operator is used to refer current context it take current values of our all variables and methods inside that scope.
        console.log(this);                  // it used to print current context inside the scope.
    }
}

// user.welcomeMessage()                    // This is .dot method to run fuction inside function.

// console.log(this)                           // This will return empty because there is nothing in global context.


// function chai() {
//     let username = "Piyush"
//     console.log(this);                      // This will return lots of stuff because when we print this inside any function then it will return all the stufs which will use to make any function.
//     console.log(this.username);             // We can not use this function like this in function we can only use this function in object.             
// }

// chai()


// How to declare function using arrow function .

// const chai = () => {
//     let username = "Piyush"
//     console.log(this);                         // If we use this function in arrow function then it will return empty scope where as if we use this is normal function then it will execute lot's of stuff.
// }

// chai()


// Declaring of arrow functions

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1, num2) => num1 + num2         // This is called implecit return arrow function we do not need to use return keyword it use without return function. 
const addTwo = (num1, num2) => (num1 + num2)          // In arrow function if we use curly({}) brackets then we need to return return function and if we use parantheses(()) then we do not need to return return function. 

const addTwo_1 = (num1, num2) => ({username: "Piyush"}) // if we want to run object 

console.log(addTwo(3,4));

// we can use arrow function in loops also

const myArray = [2, 4, 5, 6]

myArray.forEach(() => {})                  // This is a syntax for declaring arrow function inside the array.
