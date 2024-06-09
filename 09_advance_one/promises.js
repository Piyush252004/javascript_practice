const promiseOne = new Promise(function(resolve, reject){
    // DO an async task
    // Db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()                       // this will redirect us to the then method and we can run the code of then operator.
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// Another method to write promise object

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Piyush", email:"example.com"})
    },  1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// error handling

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false 
        if (!error) {
            resolve({username:"Piyush", email:"example.com"})
        } else {
            reject('ERROR: you have an error in your code')
        }
    }, 1000)
})

promiseFour.then((user) => {                // This will execute when there is no errors occures and resolve function is called
    console.log(user);
    return user.username                    // This will return username from the user object.
}).then((username) => {
    console.log(username);                  // This will hold the value which is return by previous then and print it.
}).catch(function(error){                   // THis will catch if there is any error occured inside our object or not if yes then this catch is called by reject method.
    console.log(error);
}).finally(() => console.log("the promise is finally resolved or rejected")     // This is a default method it will execute always wether our app getting resolved or reject our queries.
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if (!error) {
            resolve({username: "javascript", password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {           // This is another method to check weather our promise is complete or not. in this async await method there is not any error handler available we can not handle any error in this async await method.
    const response = await promiseFive          // This consumes data of given promise and execute code accordingly we can not catch any error for the given promise with the help of async await. if we want to catch the error in this function then we have to put our code in try-catch block then and only then when any error arrives this catch block will be executed and we can print error.
    console.log(response);
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')      // This will fetch data from the given source and print that data if we want to access it.

//         const data = await response.json()          // This response.json will convert our data into json format so that we can access our data easily. but this method is also time consuming so that we have to use await method to execute this code.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

// Then and catch method

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {                       // THis is then and catch method it is chainable then which is called thenable method and 2nd then method will run if and only if previous method will run, if previous method is not running properly then it will not execute next then.
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log("E: ", error))