// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email 
//         this.password = password
//     }               // COnstructor will be called when ever we use new keyword in our class then constructor will be called and executed.

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`         // This is used to make our username's all the characters as in uppercase
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// Behind the scene 

function User(username, email, password){
    this.username = username 
    this.email = email 
    this.password = password 
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@123", "345")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());