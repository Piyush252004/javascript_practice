// For-Each loop 

const coding = ["js", "ruby", "java", "pyton"]

// coding.forEach( function (item) {               // for-Each is a prototype of an array. with the help of for-each we can iterate over array and get values of array in separately. to execute for-Each loop we have to use function in for-Each syntax. we have to intialize function and do not need to give the name of the function just give it parameter where it is name of values of array in which it iterate. and in {} do what ever we want.
//     console.log(item);
// } )

// coding.forEach( (item) => {                     // WE can make arrow function in for-Each loop. output will be as same as previous one we do not need to give it name. just give name of parameter and execute whatever want in {}.
//     console.log(item);
// } )

// pass on function in for-Each

// function printMe(items) {
//     console.log(items);
// }

// coding.forEach(printMe)                         // WE can pass reference of function to run array in for-each loop so that we can get same outpur as previous. we do not need to pass function we have to just pass reference of function.

// coding.forEach( (item, index, arr) => {            // We can pass item, index and whole array as an parameter in function of for-each loop. which will give us item, index and whole array if we printing it.
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascipt",
        languageFileName : ".js"
    },
    {
        languageName : "java",
        languageFileName : ".java"
    },
    {
        languageName : "Python",
        languageFileName : ".py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})