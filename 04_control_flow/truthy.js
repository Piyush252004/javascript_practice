const userEmail = []

if (userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have user email");
}

// Falsy values

// false, 0, -0, BigInt 0n, "", null undefined, NaN

// Truthy Values

// True, "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5??10                     // It will use to check weather gotten value is null and undefined or not if it is null then it check anyother value is assigned it or not if yes then it will store it in that variable or else it will store null in that variable.
// val1 = null ?? 10                // It will assign which first value it get after null.
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary operator   This is diffrent than Nullish oprator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

