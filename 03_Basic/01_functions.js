

function sayMyName() {
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2); 
// }

// addTwoNumbers(3,"4")

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2 
//     // return result
//     return number1 + number2 
// }

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

// function loginUserMessage(username = "Piyush"){          // In this we have given some default value to our parameters.
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Piyush"));


// function multiplyNumbers(number1, number2) {
//     if(number1 === null){
//         console.log("please enter valid number");
//     }
//     else {
//         return number1 * number2
//     }
// }

// console.log(multiplyNumbers(3, 4))


// function calculateCartPrice(...num1) {         // (...) is a rest operator. if we use ... in object or array then it is used as spread operator and if we use it in function then it is called rest operator. rest operator means to wrap all different- different values in an array and execute it.
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500));


// How to pass an object or use it in function 

const user = {
    username: "Piyush",
    price: 200
}

function hadleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);       // To call values or keys of object in function we can use .(dot) method with object name.
}

// hadleObject(user)

hadleObject({                          // This method used to execute object while function calling.
    username: "Krish",
    price: 300
})


// How to pass an array or use it in function 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {          // This is a method to pass an array name as an parameter in function.
    return getArray[1]                          // Make sure what ever name of your array is but while returning name should be as same as parameter.
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 1000]));       // We can pass an array as an argument also.