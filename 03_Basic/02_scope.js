// let a = 10
// const b = 20
// var c = 30

let a = 300                 // Outside of scope is known as global scope and inside of scope is known as local scope

if (true) {                 // in javascript or all the languages basically {} curly braces known as scope. in function and looping format we have to use it as an skope or in object it is syntax as object declaration.
    let a=10
    const b =20
    var c =30
    console.log("Inner: ", a);
}

// why we do not use var as a type of variable 

// -> when we define scope it is good to execute all variables values in the scope only this condition full fill by const and let only var not follow this condition so that var is not a good way to declare a variable. We can execute values of var type variable outside the scope. 
// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope

function one() {                        // In this there are two functions are nested within each other and make two nested scope.
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

// nested scope example with nested if statement.

if (true) {
    const username = "Piyush"
    if (username === "Piyush"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ******************* interesting ******************

// two types of making functions 

// 1

function one(num) {
    return num + 1
}
console.log(one(5))                         // While we declare function after definition then it execute perfectly. and when we declare function as an function and we call it before declaration then it execcute as same as previous one it will not show any error.

// 2

const two = function(num) {                 // In this const two is called as an expression and we give function as an value.
    return num + 1
}
console.log(two(5))                         // if we declare this function call before definition then an error will occure while storing it in variable and store it in variable. this is called hoisting in javascript. when we declare a function in variable and we want to call it it is necessary to call it after definition otherwise it will shows an error.