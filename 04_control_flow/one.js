// if statement

//syntax

// if (condition){

// }

// const isUserLoggedIn = true
// const temprature = 41

// if (temprature == 41){                // in condition we use comparison checking operators. we use to compare and if conditio is true then it runs if block or else it run else block.
//     console.log("less than 50");
// }
// else {
//     console.log("Temprature is more than 50");
// }

// comparision operators <, >, <=, >=, ==, ===, !=, !==

// Block scope

// const score = 200 

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000

// if (balance > 5000) console.log("test"),         // This type of coding is not good and not recommended.
// console.log("test2");

if (balance < 500){
    console.log("less than");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (UserLoggedIn && debitCard && 2==3){             // IT executes when both the conditions are true if one of them is false then it will return false and do not eceute if block.
   console.log("Allow to buy courses"); 
}

if (loggedInFromGoogle || loggedInFromEmail){      // It executes when one of the conditions will be true if any of the condition will be true then it will execute the if block or else it will execute else block.
    console.log("allow to login");
}