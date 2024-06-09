class User {
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{                         // With the help of extends keyword we can use all the properties of our parents class. 
    constructor(username, email, password){
        super(username)                             // This will redirect to the current context of parent function (this).
        this.email = email 
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', "chai@gmial.com", "123")

chai.addCourse()
chai.logMe()                        // Child class can also use their parents properties, methods and functions so that they can execute by their child also.

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === Teacher);      // This is used to check weather that both the classes are same or not if yes then it will print true. in this case it is false so that it will print false.

console.log(chai instanceof User);  // THis instanceof method check if chai is instance of the user class or not if we use user class properties then this will print true and if we not inherit user property in chai class then it will print false.

