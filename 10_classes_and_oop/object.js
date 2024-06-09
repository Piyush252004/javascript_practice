function multipleBy5(num){          // In java script all the things are objects we can take it as an object like array, string, function, object etc. all are considered as an object.
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username 
    this.score = score 
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()


// New keyword functionality


// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: the new keyword initiates the creation of a new Javascript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor funcion. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't retrun a non-primitive value (object, array, function, etc.), the newly created object is returned.