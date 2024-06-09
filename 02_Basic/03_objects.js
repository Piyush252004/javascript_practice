// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")            // This is a method of defining a symbol syntax

const JsUser = {
    name: "Piyush",                    // In general all keys are stored as an format of string 
    "Full Name" : "Piyush Balwani",
    [mySym]:"MyKey1",                  // This is a mehod for defining a key as an form of symbol method. which is important for interview perspective
    age: 20,
    location: "jaipur",
    email: "hitest@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// object execution 

// we can execute object with 2 methods 1st is .(dot) and other is [](square) form.

// console.log(JsUser.email)               // in dot method we do not need to give name of key as an string it will automatically consider as an string.
// console.log(JsUser["email"])            // in [] square method we have to defind key as an string so that it can access that key as an string and give us the value of that key.
// console.log(JsUser["Full Name"])        // if we have given  key as an string format then we cannot access it with .dot method we can only access it with the [] operator.
// console.log(JsUser["mySym"])            // if we want to access a key as an symbol we have to take it as an square notation.

// JsUser.email = "Piyush@chatgpt.com"     // It will override the value of email of our object
// Object.freeze(JsUser)                   // This method used to freezed our object so no one can change our key's and values of our object.
// JsUser.email = "Piyush@chat.com"
// console.log(JsUser); 

// Function object

JsUser.greeting = function(){          // This is a method to define function in our object. 
    console.log("Hello Js user");
}

JsUser.greetinTwo = function(){
    console.log(`Hello Js User, ${this["Full Name"]}`)       // "``" if we write any string in console in `` backtiks then it is called string interpolation.   if we want to Refference our same object then we have to use "this." and then we can access our own objects properties.
}

console.log(JsUser.greeting);           // if we console this it will not return function but it execute only referrence of our function 
console.log(JsUser.greeting());         // This is used to execute object function 
console.log(JsUser.greetinTwo());

// Special notes :- if we have to access objects properties then we have to use . mehod preferable but if there is any condition or that type which we cannot access with the help of . then and only then we have to use this [] square method.