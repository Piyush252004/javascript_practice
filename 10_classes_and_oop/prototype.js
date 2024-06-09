// let myName = "Piyush"

// console.log(myName.length);

let myHeros = ["thor","sideman"]

let heroPower = {
    thor: "hammer",
    spidermam: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.piyush = function(){
    console.log(`piyush is present in all objects`);
}

Array.prototype.heyPiyush = function(){
    console.log(`Piyush says hello`);
}

// heroPower.Piyush()

myHeros.piyush()
myHeros.heyPiyush()
// heroPower.heyPiyush()


// Inheritance 

const User = {
    name: "chai",

}

const Teacher = {
    makevide: true 
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport                  // It will connect reference with the teaching support object.
}

Teacher.__proto__ = User 

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)     // set method is used to inherit property of another object to other object it is used in modern syntax.

let anotherUsername = "Piyush     "

String.prototype.trueLength = function(){
    console.log('${this}');
    console.log(`this.name`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()