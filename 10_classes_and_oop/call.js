function SetUsername(username){
    // complex DB calls
    this.username = username 
}

function createUser(username, email, password) {
    SetUsername.call(this, username)          // .call prototype is used to hold the reference of this function it will hold all the references of all variables. this parameter is used to handle reference of variale or function which is availble inside that function. if we not used this as a parameter than it will not execute this variable. 
    
    this.email = email 
    this.password = password 
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);